!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("2PzaW",(function(n,t){e(n.exports,"fetchTrends",(function(){return a})),e(n.exports,"fetchByName",(function(){return o})),e(n.exports,"fetchGenres",(function(){return i}));var r="fdee5313a0b876498560bfe4baaab806";function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="https://api.themoviedb.org/3/search/movie?";return fetch("".concat(t,"api_key=").concat(r,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}function a(){return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(r,"&language=en-US")).then((function(e){return e.json()}))}function i(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}));var a=o("2PzaW"),i=document.querySelector(".form-text"),c={},l="https://image.tmdb.org/t/p/w500";(0,a.fetchGenres)().then((function(e){e.genres.map((function(e){c[e.id]=e.name}))})),(0,a.fetchTrends)().then((function(e){return s(e.results)})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.name.value.trim();if(!n)return void i.classList.remove("visually-hidden");(0,a.fetchByName)(n).then((function(n){if(console.log(n),!n.results.length)return i.classList.remove("visually-hidden"),setTimeout((function(){i.classList.add("visually-hidden")}),3e3),void e.target.reset();s(n.results)})).catch((function(e){console.log(e)}))}));var u=document.querySelector(".gallery");function s(e){u.innerHTML="";var n=e.reduce((function(e,n){return e+'<li class="gallery__item">\n\n\n        <a class="gallery__link" href="#">\n          <img id=\''.concat(n.id,"'\n            class=\"gallery__img\"\n            src='").concat(l).concat(n.poster_path,'\'\n            alt=""\n            \n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">').concat(n.original_title,'</p>\n            <div class="gallery-text__info">\n\n              <p class="gallery-text__genre"> ').concat(n.genre_ids.map((function(e){return c[e]})).length>3?n.genre_ids.map((function(e){return" "+c[e]})).slice(0,2)+", Other ":n.genre_ids.map((function(e){return" "+c[e]}))," | ").concat(n.release_date.slice(0,4),"</p>\n\n              \n            </div>\n          </div>\n        </a>\n        </li>")}),"");u.insertAdjacentHTML("beforeend",n)}console.log((0,a.fetchByName)("batman",1).then((function(e){return console.log(e)})))}();
//# sourceMappingURL=index.f31288b4.js.map
