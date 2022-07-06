!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("2PzaW",(function(t,n){e(t.exports,"fetchTrends",(function(){return o})),e(t.exports,"fetchByName",(function(){return a})),e(t.exports,"fetchGenres",(function(){return s}));var i="fdee5313a0b876498560bfe4baaab806";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="https://api.themoviedb.org/3/search/movie?";return fetch("".concat(n,"api_key=").concat(i,"&language=en-US&page=").concat(t,"&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(i,"&page=").concat(e,"&language=en-US")).then((function(e){return e.json()}))}function s(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}})),a.register("fSCrk",(function(t,n){e(t.exports,"markUpForGallery",(function(){return d}));var i=a("2PzaW"),o=a("jcFG7"),s=document.querySelector(".form-text"),l={},r=document.querySelector(".gallery"),c=document.querySelector(".form");function d(e){r.innerHTML="";var t=e.reduce((function(e,t){return e+"<li id='".concat(t.id,'\' class="gallery__item">\n      \n          <img \n            class="gallery__img"\n            src=\'').concat(t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg","'\n            alt=\"").concat(t.original_title,'"\n            \n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">').concat(t.original_title,'</p>\n            <div class="gallery-text__info">\n\n\n              <p class="gallery-text__genre"> ').concat(t.genre_ids.map((function(e){return l[e]})).length>3?t.genre_ids.map((function(e){return" "+l[e]})).slice(0,2)+", Other ":t.genre_ids.map((function(e){return" "+l[e]}))," | ").concat(t.release_date.slice(0,4),"</p>\n\n                </div>\n                </div>\n                \n                </li>")}),"");r.insertAdjacentHTML("beforeend",t)}(0,i.fetchGenres)().then((function(e){e.genres.map((function(e){l[e.id]=e.name,localStorage.setItem("genres",JSON.stringify(l))}))})),(0,i.fetchTrends)().then((function(e){d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),(0,o.paginationMarkup)(e.page,e.total_pages)})),c.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.name.value.trim();if(!t)return s.classList.remove("visually-hidden"),void setTimeout((function(){s.classList.add("visually-hidden")}),3e3);(0,i.fetchByName)(t).then((function(n){if(!n.results.length)return s.classList.remove("visually-hidden"),setTimeout((function(){s.classList.add("visually-hidden")}),3e3),void e.target.reset();localStorage.setItem("response",JSON.stringify(n.results)),d(n.results),(0,o.paginationMarkup)(n.page,n.total_pages,t)})).catch((function(e){console.log(e)}))}))})),a.register("jcFG7",(function(t,n){e(t.exports,"paginationMarkup",(function(){return u}));var i,o,s=a("2PzaW"),l=a("fSCrk"),r=document.querySelector(".pagination__list"),c=document.querySelector(".pagination"),d=document.querySelector(".pagination__btn-prev"),g=document.querySelector(".pagination__btn-next"),p=null;function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i=e,o=t,p=n,c.removeEventListener("click",_);var a="";if(i>=1&&(a+='<li class="pagination__item">1</li>'),2===i&&(a+='<li class="pagination__item">2</li>'),3===i&&(a+='<li class="pagination__item">2</li><li class="pagination__item">3</li>'),4===i&&(a+='<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>'),i>4&&(a+='<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">'.concat(i-2,'</li><li class="pagination__item">').concat(i-1,'</li><li class="pagination__item">').concat(i,"</li>")),o-i>=4&&(a+='<li class="pagination__item">'.concat(i+1,'</li><li class="pagination__item">').concat(i+2,'</li><li class="pagination__item-hidden"><span>...</span></li>')),o-i==3&&(a+='<li class="pagination__item">'.concat(i+1,'</li><li class="pagination__item">').concat(i+2,'</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>')),o-i==2&&(a+='<li class="pagination__item">'.concat(i+1,"</li>")),o-i==0)return r.innerHTML=a,f(),m(),h(),void c.addEventListener("click",_);a+='<li class="pagination__item">'.concat(o,"</li>"),r.innerHTML=a,f(),m(),h(),c.addEventListener("click",_)}function _(e){"BUTTON"===e.target.nodeName&&("prev"===e.target.dataset.btn&&(i-=1,v()),"next"===e.target.dataset.btn&&(i+=1,v())),"LI"!==e.target.nodeName||e.target.classList.contains("pagination__item-hidden")||String(i)!==e.target.textContent&&(i=e.target.textContent,v())}function f(){r.lastElementChild.classList.add("pagination-edge"),i>3&&r.firstElementChild.classList.add("pagination-edge"),o-i<3&&r.lastElementChild.classList.remove("pagination-edge")}function m(){document.querySelectorAll(".pagination__item").forEach((function(e){e.textContent===String(i)&&e.classList.add("pagination__currentPage")}))}function h(){1===i?(d.disabled=!0,d.classList.remove("pagination__btn"),d.classList.add("pagination__btn-Ldisabled")):(d.disabled=!1,d.classList.add("pagination__btn"),d.classList.remove("pagination__btn-Ldisabled")),i===o?(g.disabled=!0,g.classList.remove("pagination__btn"),g.classList.add("pagination__btn-Rdisabled")):(g.disabled=!1,g.classList.add("pagination__btn"),g.classList.remove("pagination__btn-Rdisabled"))}function v(){null===p?(c.removeEventListener("click",_),(0,s.fetchTrends)(i).then((function(e){(0,l.markUpForGallery)(e.results),u(e.page,e.total_pages),console.log("~ page total_pages",e.page,e.total_pages)}))):(c.removeEventListener("click",_),(0,s.fetchByName)(p,i).then((function(e){(0,l.markUpForGallery)(e.results),u(e.page,e.total_pages,p),console.log("~ page total_pages",e.page,e.total_pages)})))}})),a("jcFG7")}();
//# sourceMappingURL=index.6b7bc047.js.map
