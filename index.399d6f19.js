function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},l=n.parcelRequired7c6;null==l&&((l=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){r[t]=e},n.parcelRequired7c6=l),l.register("kyEFX",(function(e,n){var o,r;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var l={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)l[e[n]]=t[e[n]]},r=function(t){var e=l[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),l("kyEFX").register(JSON.parse('{"Ujaud":"index.399d6f19.js","9v6fF":"symbol-defs.748d6f7b.svg"}')),l("asUcn"),l("2Fivl");var a;a=new URL(l("kyEFX").resolve("9v6fF"),import.meta.url).toString();const s=document.querySelector(".gallery"),i=document.querySelector(".backdrop");let d=[],c=[];s.addEventListener("click",(function(t){let n;if(t.target.closest("li")){let o=JSON.parse(localStorage.getItem("response"));i.classList.remove("is-hidden");const r=t.target.closest("li").id;return n=o.find((t=>String(t.id)===r)),c.push(n),d.push(n),void function(t){const n=JSON.parse(localStorage.getItem("genres")),o="https://image.tmdb.org/t/p/w500",r=`\n    <div class="modal-group">\n      <button data-modal-close class="modal-group__close-btn">\n      <object class="modal-group__close-object">\n          <svg class="modal-group__close-icon" width="28" height="28">\n            <use href="${e(a)}#icon-close-modal"></use>\n          </svg>\n        </object>\n      </button>\n      <div class="modal-group__img-wrapper">\n        <img\n          class="modal-group__img"\n          src="${o}${t.poster_path}"\n          alt="${t.original_title}"\n          width="280"\n        />\n      </div>\n      <div class="modal-group__wrapper">\n        <h2 class="modal-group__title">${t.original_title}</h2>\n        <table class="table">\n          <tbody>\n            <tr>\n              <td class="table__title">Vote / Votes</td>\n              <td class="table__text">\n                <span class="gallery-text__rating table-text-orange">${t.vote_average}</span>\n                /\n                <span class="table-text-grey">${t.vote_count}</span>\n              </td>\n            </tr>\n\n            <tr>\n              <td class="table__title">Popularity</td>\n              <td class="table__text">${t.popularity}</td>\n            </tr>\n            <tr>\n              <td class="table__title">Original Title</td>\n              <td class="table__text">${t.original_title}</td>\n            </tr>\n            <tr>\n              <td class="table__title">Genre</td>\n              <td class="table__text">${t.genre_ids.map((t=>" "+n[t]))}</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3 class="modal-group__about-title">About</h3>\n        <p class="modal-group__about-text">\n        ${t.overview}\n        </p>\n        <div class="modal-group__btns">\n          <button class="watched-btn" type="submit">add to Watched</button>\n          <button class="queue-btn" type="submit">add to queue</button>\n        </div>\n      </div>\n    </div>`;i.innerHTML=r;document.querySelector(".modal-group__close-btn").addEventListener("click",(()=>{i.classList.add("is-hidden")}));const l=document.querySelector(".watched-btn"),s=document.querySelector(".queue-btn");function u(){localStorage.setItem("watched",JSON.stringify(d))}function g(){localStorage.setItem("queue",JSON.stringify(c))}l.addEventListener("click",u),s.addEventListener("click",g)}(n)}return}));
//# sourceMappingURL=index.399d6f19.js.map
