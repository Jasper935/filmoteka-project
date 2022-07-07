let i=JSON.parse(localStorage.getItem("genres"));const t=document.querySelector(".gallery");function e(e){0===e.length&&(t.innerHTML="");let n=e.reduce(((t,e)=>t+`<li id="${e.id}" class="gallery__item">\n        <a class="gallery__link" href="#">\n          <img\n            class="gallery__img"\n            src='https://image.tmdb.org/t/p/w500${e.poster_path}'\n            alt=""\n            width = '280'\n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">${e.original_title}</p>\n            <div class="gallery-text__info">\n              <p class="gallery-text__genre"> ${e.genre_ids.map((t=>i[t])).length>3?e.genre_ids.map((t=>" "+i[t])).slice(0,2)+", Other ":e.genre_ids.map((t=>" "+i[t]))} | ${e.release_date.slice(0,4)}</p>\n        <span class="gallery-text__rating">${e.vote_average}</span>\n            </div>\n          </div>\n        </a>\n      </li>`),"");t.innerHTML=n}const n=document.querySelector(".pagination__list"),a=document.querySelector(".pagination"),l=document.querySelector(".pagination__btn-prev"),s=document.querySelector(".pagination__btn-next");let o,c,_;function g(i){_=JSON.parse(localStorage.getItem(`${i}`)),o=1,c=Math.ceil(_.length/20),e(_.slice(0,20)),d()}function d(){let i="";if(o>=1&&(i+='<li class="pagination__item">1</li>'),2===o&&(i+='<li class="pagination__item">2</li>'),3===o&&(i+='<li class="pagination__item">2</li><li class="pagination__item">3</li>'),4===o&&(i+='<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>'),o>4&&(i+=`<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">${o-2}</li><li class="pagination__item">${o-1}</li><li class="pagination__item">${o}</li>`),c-o>=4&&(i+=`<li class="pagination__item">${o+1}</li><li class="pagination__item">${o+2}</li><li class="pagination__item-hidden"><span>...</span></li>`),c-o==3&&(i+=`<li class="pagination__item">${o+1}</li><li class="pagination__item">${o+2}</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>`),c-o==2&&(i+=`<li class="pagination__item">${o+1}</li>`),c-o==0)return n.innerHTML=i,p(),m(),u(),void a.addEventListener("click",r);i+=`<li class="pagination__item">${c}</li>`,n.innerHTML=i,p(),m(),u(),a.addEventListener("click",r)}function r(i){"BUTTON"===i.target.nodeName&&("prev"===i.target.dataset.btn&&(o-=1,b()),"next"===i.target.dataset.btn&&(o+=1,b())),"LI"!==i.target.nodeName||i.target.classList.contains("pagination__item-hidden")||String(o)!==i.target.textContent&&(o=Number(i.target.textContent),b())}function p(){n.lastElementChild.classList.add("pagination-edge"),o>3&&n.firstElementChild.classList.add("pagination-edge"),c-o<3&&n.lastElementChild.classList.remove("pagination-edge")}function m(){document.querySelectorAll(".pagination__item").forEach((i=>{i.textContent===String(o)&&i.classList.add("pagination__currentPage")}))}function u(){1===o?(l.disabled=!0,l.classList.remove("pagination__btn"),l.classList.add("pagination__btn-Ldisabled")):(l.disabled=!1,l.classList.add("pagination__btn"),l.classList.remove("pagination__btn-Ldisabled")),o===c?(s.disabled=!0,s.classList.remove("pagination__btn"),s.classList.add("pagination__btn-Rdisabled")):(s.disabled=!1,s.classList.add("pagination__btn"),s.classList.remove("pagination__btn-Rdisabled"))}function b(){a.removeEventListener("click",r);const i=20*(o-1);e(_.slice(i,i+20)),d(),console.log("~ currentPage",o),console.log("~ totalPages",c)}const L=document.querySelector(".library__button--watched"),h=document.querySelector(".library__button--queue");function v(){const i=JSON.parse(localStorage.getItem("watched"));i?(console.log(i),e(i),g("watched")):e([])}v(),L.addEventListener("click",v),h.addEventListener("click",(function(){const i=JSON.parse(localStorage.getItem("queue"));i?(e(i),g("queue")):e([])}));
//# sourceMappingURL=library.104057e2.js.map