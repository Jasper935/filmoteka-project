import { fetchTrends, fetchByName, fetchGenres } from './js/api/fetchApi';
import {
  paginationMarkup,
  firstPaginationCall,
  removePagination,
} from './js/pagination';
let findErr = document.querySelector('.form-text');

let obj1 = {};
let forLocalStor;
const urlImg = 'https://image.tmdb.org/t/p/w500';
const galleryItem = document.querySelector('.gallery');
const form = document.querySelector('.form');
fetchGenres().then(data => {
  data.genres.map(el => {
    obj1[el.id] = el.name;
    localStorage.setItem('genres', JSON.stringify(obj1));
  });
});

fetchTrends(JSON.parse(localStorage.getItem('page'))).then(res => {
  localStorage.setItem('response', JSON.stringify(res.results));
  markUpForGallery(res.results);
  paginationMarkup(res.page, res.total_pages);
});

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const query = evt.currentTarget.name.value.trim();

  if (!query) {
    evt.target.reset();
    findErr.classList.remove('visually-hidden');
    setTimeout(() => {
      findErr.classList.add('visually-hidden');
    }, 3000);

    return;
  }

  fetchByName(query)
    .then(res => {
      console.log(res.results.length);
      if (res.results.length === 0) {
        findErr.classList.remove('visually-hidden');
        setTimeout(() => {
          findErr.classList.add('visually-hidden');
        }, 3000);
        return;
      }
      evt.target.reset();
      localStorage.setItem('response', JSON.stringify(res.results));
      markUpForGallery(res.results);
      paginationMarkup(res.page, res.total_pages, query);
    })
    .catch(err => {
      console.log(err);
    });
}

function markUpForGallery(arr) {
  galleryItem.innerHTML = '';
  let a = arr.reduce(
    (acc, el) =>
      (acc += `<li id='${el.id}' class="gallery__item" >
      
          <img 
            class="gallery__img no-cover"
            src='${
              el.poster_path
                ? urlImg + el.poster_path
                : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
            }'
            alt="${el.original_title}"
            
          />
          <div class="gallery-text">
            <p class="gallery-text__title">${el.original_title}</p>
            <div class="gallery-text__info">


              <p class="gallery-text__genre"> ${
                el.genre_ids.length
                  ? el.genre_ids.map(gen => {
                      return (gen = obj1[gen]);
                    }).length > 3
                    ? el.genre_ids
                        .map(gen => {
                          return (gen = ' ' + obj1[gen]);
                        })
                        .slice(0, 2) + ', Other '
                    : el.genre_ids.map(gen => {
                        return (gen = ' ' + obj1[gen]);
                      })
                  : 'No genres found'
              } | ${
        el.release_date ? el.release_date.slice(0, 4) : 'No info'
      }</p>

                </div>
                </div>
                
                </li>`),

    ``
  );
  galleryItem.insertAdjacentHTML('beforeend', a);
}

export { markUpForGallery };
