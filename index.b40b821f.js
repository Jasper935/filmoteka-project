!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("2PzaW",(function(t,n){e(t.exports,"fetchTrends",(function(){return s})),e(t.exports,"fetchByName",(function(){return a})),e(t.exports,"fetchGenres",(function(){return l}));var i="fdee5313a0b876498560bfe4baaab806";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="https://api.themoviedb.org/3/search/movie?";return fetch("".concat(n,"api_key=").concat(i,"&language=en-US&page=").concat(t,"&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(i,"&page=").concat(e,"&language=en-US")).then((function(e){return e.json()}))}function l(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}));var s=a("2PzaW"),l=(s=a("2PzaW"),document.querySelector(".form-text")),o={},r=document.querySelector(".gallery"),c=document.querySelector(".form");function d(e){e.preventDefault();var t=e.currentTarget.name.value.trim();if(!t)return l.classList.remove("visually-hidden"),void setTimeout((function(){l.classList.add("visually-hidden")}),3e3);r.innerHTML='<div class="spinner-border"></div>',(0,s.fetchByName)(t).then((function(n){if(!n.results.length)return l.classList.remove("visually-hidden"),setTimeout((function(){l.classList.add("visually-hidden")}),3e3),void e.target.reset();localStorage.setItem("response",JSON.stringify(n.results)),g(n.results),b(n.page,n.total_pages,t)})).catch((function(e){console.log(e)}))}function g(e){r.innerHTML="";var t=e.reduce((function(e,t){return e+"<li id='".concat(t.id,'\' class="gallery__item" >\n      \n          <img \n            class="gallery__img"\n            src=\'').concat(t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg","'\n            alt=\"").concat(t.original_title,'"\n            \n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">').concat(t.original_title,'</p>\n            <div class="gallery-text__info">\n\n\n              <p class="gallery-text__genre"> ').concat(t.genre_ids.map((function(e){return o[e]})).length>3?t.genre_ids.map((function(e){return" "+o[e]})).slice(0,2)+", Other ":t.genre_ids.map((function(e){return" "+o[e]}))," | ").concat(t.release_date.slice(0,4),"</p>\n\n                </div>\n                </div>\n                \n                </li>")}),"");r.insertAdjacentHTML("beforeend",t)}(0,s.fetchGenres)().then((function(e){e.genres.map((function(e){o[e.id]=e.name,localStorage.setItem("genres",JSON.stringify(o))}))})),r.innerHTML='<div class="spinner-border"></div>',(0,s.fetchTrends)().then((function(e){g(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages)})),c.addEventListener("submit",d);var u,p,_=document.querySelector(".pagination__list"),f=document.querySelector(".pagination"),m=document.querySelector(".pagination__btn-prev"),h=document.querySelector(".pagination__btn-next"),v=null;function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;u=e,p=t,v=n,f.removeEventListener("click",y);var i="";if(u>=1&&(i+='<li class="pagination__item">1</li>'),2===u&&(i+='<li class="pagination__item">2</li>'),3===u&&(i+='<li class="pagination__item">2</li><li class="pagination__item">3</li>'),4===u&&(i+='<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>'),u>4&&(i+='<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">'.concat(u-2,'</li><li class="pagination__item">').concat(u-1,'</li><li class="pagination__item">').concat(u,"</li>")),p-u>=4&&(i+='<li class="pagination__item">'.concat(u+1,'</li><li class="pagination__item">').concat(u+2,'</li><li class="pagination__item-hidden"><span>...</span></li>')),p-u==3&&(i+='<li class="pagination__item">'.concat(u+1,'</li><li class="pagination__item">').concat(u+2,'</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>')),p-u==2&&(i+='<li class="pagination__item">'.concat(u+1,"</li>")),p-u==0)return _.innerHTML=i,L(),S(),x(),void f.addEventListener("click",y);i+='<li class="pagination__item">'.concat(p,"</li>"),_.innerHTML=i,L(),S(),x(),f.addEventListener("click",y)}function y(e){"BUTTON"===e.target.nodeName&&("prev"===e.target.dataset.btn&&(u-=1,T()),"next"===e.target.dataset.btn&&(u+=1,T())),"LI"!==e.target.nodeName||e.target.classList.contains("pagination__item-hidden")||String(u)!==e.target.textContent&&(u=e.target.textContent,T())}function L(){_.lastElementChild.classList.add("pagination-edge"),u>3&&_.firstElementChild.classList.add("pagination-edge"),p-u<3&&_.lastElementChild.classList.remove("pagination-edge")}function S(){document.querySelectorAll(".pagination__item").forEach((function(e){e.textContent===String(u)&&e.classList.add("pagination__currentPage")}))}function x(){1===u?(m.disabled=!0,m.classList.remove("pagination__btn"),m.classList.add("pagination__btn-Ldisabled")):(m.disabled=!1,m.classList.add("pagination__btn"),m.classList.remove("pagination__btn-Ldisabled")),u===p?(h.disabled=!0,h.classList.remove("pagination__btn"),h.classList.add("pagination__btn-Rdisabled")):(h.disabled=!1,h.classList.add("pagination__btn"),h.classList.remove("pagination__btn-Rdisabled"))}function T(){null===v?(f.removeEventListener("click",y),(0,s.fetchTrends)(u).then((function(e){g(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages)}))):(f.removeEventListener("click",y),(0,s.fetchByName)(v,u).then((function(e){g(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages,v)})))}}();
//# sourceMappingURL=index.b40b821f.js.map
