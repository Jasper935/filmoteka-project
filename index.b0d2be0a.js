function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("asUcn",(function(t,n){e(t.exports,"fetchTrends",(function(){return s})),e(t.exports,"fetchByName",(function(){return a})),e(t.exports,"fetchGenres",(function(){return l}));const i="fdee5313a0b876498560bfe4baaab806";function a(e,t=1){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${i}&language=en-US&page=${t}&include_adult=false&query=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}function s(e=1){return e||(e=1),fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${i}&page=${e}&language=en-US`).then((e=>e.json()))}function l(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806").then((e=>e.json())).catch((e=>console.log(e)))}}));var s=a("asUcn");s=a("asUcn");let l=document.querySelector(".form-text"),o={};const r=document.querySelector(".gallery"),c=document.querySelector(".form");function d(e){r.innerHTML="";let t=e.reduce(((e,t)=>e+`<li id='${t.id}' class="gallery__item" >\n      \n          <img \n            class="gallery__img no-cover"\n            src='${t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg"}'\n            alt="${t.original_title}"\n            \n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">${t.original_title}</p>\n            <div class="gallery-text__info">\n\n\n              <p class="gallery-text__genre"> ${t.genre_ids.length?t.genre_ids.map((e=>o[e])).length>3?t.genre_ids.map((e=>" "+o[e])).slice(0,2)+", Other ":t.genre_ids.map((e=>" "+o[e])):"No genres found"} | ${t.release_date?t.release_date.slice(0,4):"No info"}</p>\n\n                </div>\n                </div>\n                \n                </li>`),"");r.insertAdjacentHTML("beforeend",t)}r.innerHTML='<div class="spinner"><span class="spinner__animation"></span><span class="spinner__info"></span></div>',(0,s.fetchGenres)().then((e=>{e.genres.map((e=>{o[e.id]=e.name,localStorage.setItem("genres",JSON.stringify(o))}))})),(0,s.fetchTrends)(JSON.parse(localStorage.getItem("page"))).then((e=>{localStorage.setItem("response",JSON.stringify(e.results)),d(e.results),b(e.page,e.total_pages)})),c.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.name.value.trim();if(!t)return e.target.reset(),l.classList.remove("visually-hidden"),void setTimeout((()=>{l.classList.add("visually-hidden")}),3e3);r.innerHTML='<div class="spinner"><span class="spinner__animation"></span><span class="spinner__info"></span></div>',(0,s.fetchByName)(t).then((n=>{if(console.log(n.results.length),0===n.results.length)return l.classList.remove("visually-hidden"),setTimeout((()=>{l.classList.add("visually-hidden")}),3e3),b(n.page,n.total_pages,t),void(g.innerHTML="");e.target.reset(),localStorage.setItem("response",JSON.stringify(n.results)),d(n.results),b(n.page,n.total_pages,t)})).catch((e=>{console.log(e)})).finally((()=>{n.classList.add("visually-hidden")}));const n=document.querySelector(".spinner")}));const g=document.querySelector(".pagination__list"),p=document.querySelector(".pagination"),_=document.querySelector(".pagination__btn-prev"),u=document.querySelector(".pagination__btn-next");let m,f=Number(JSON.parse(localStorage.getItem("page")))||1,h=null;function v(e){localStorage.setItem("page",JSON.stringify(e)),f=Number(JSON.parse(localStorage.getItem("page")))}function b(e,t,n=null){v(e),m=Number(t),h=n,p.removeEventListener("click",y);let i="";if(f>=1&&(i+='<li class="pagination__item">1</li>'),2===f&&(i+='<li class="pagination__item">2</li>'),3===f&&(i+='<li class="pagination__item">2</li><li class="pagination__item">3</li>'),4===f&&(i+='<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>'),f>4&&(i+=`<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">${f-2}</li><li class="pagination__item">${f-1}</li><li class="pagination__item">${f}</li>`),m-f>=4&&(i+=`<li class="pagination__item">${f+1}</li><li class="pagination__item">${f+2}</li><li class="pagination__item-hidden"><span>...</span></li>`),m-f==3&&(i+=`<li class="pagination__item">${f+1}</li><li class="pagination__item">${f+2}</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>`),m-f==2&&(i+=`<li class="pagination__item">${f+1}</li>`),m-f==0)return g.innerHTML=i,L(),S(),N(),void p.addEventListener("click",y);i+=`<li class="pagination__item">${m}</li>`,g.innerHTML=i,L(),S(),N(),p.addEventListener("click",y)}function y(e){"BUTTON"===e.target.nodeName&&("prev"===e.target.dataset.btn&&(v(f-1),$()),"next"===e.target.dataset.btn&&(v(f+1),$())),"LI"!==e.target.nodeName||e.target.classList.contains("pagination__item-hidden")||String(f)!==e.target.textContent&&(v(e.target.textContent),$())}function L(){g.lastElementChild.classList.add("pagination-edge"),f>3&&g.firstElementChild.classList.add("pagination-edge"),m-f<3&&g.lastElementChild.classList.remove("pagination-edge")}function S(){document.querySelectorAll(".pagination__item").forEach((e=>{e.textContent===String(f)&&e.classList.add("pagination__currentPage")}))}function N(){1===f?(_.disabled=!0,_.classList.remove("pagination__btn"),_.classList.add("pagination__btn-Ldisabled")):(_.disabled=!1,_.classList.add("pagination__btn"),_.classList.remove("pagination__btn-Ldisabled")),f===m?(u.disabled=!0,u.classList.remove("pagination__btn"),u.classList.add("pagination__btn-Rdisabled")):(u.disabled=!1,u.classList.add("pagination__btn"),u.classList.remove("pagination__btn-Rdisabled"))}function $(){null===h?(p.removeEventListener("click",y),(0,s.fetchTrends)(f).then((e=>{d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages)}))):(p.removeEventListener("click",y),(0,s.fetchByName)(h,f).then((e=>{d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages,h)})))}
//# sourceMappingURL=index.b0d2be0a.js.map
