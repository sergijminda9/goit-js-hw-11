/* empty css                      */import{a as m,S as d,i}from"./assets/vendor-D1AWmRWP.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="YOUR_PIXABAY_API_KEY",f="https://pixabay.com/api/";function _(r){return m.get(f,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}).then(s=>s.data)}const c=document.getElementById("gallery"),g=document.getElementById("loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:l,comments:u,downloads:p})=>`
        <li class="gallery__item">
          <a class="gallery__link" href="${o}">
            <img
              class="gallery__img"
              src="${a}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="gallery__info">
            <div class="gallery__stat">
              <span class="gallery__stat-label">Likes</span>
              <span class="gallery__stat-value">${t.toLocaleString()}</span>
            </div>
            <div class="gallery__stat">
              <span class="gallery__stat-label">Views</span>
              <span class="gallery__stat-value">${l.toLocaleString()}</span>
            </div>
            <div class="gallery__stat">
              <span class="gallery__stat-label">Comments</span>
              <span class="gallery__stat-value">${u.toLocaleString()}</span>
            </div>
            <div class="gallery__stat">
              <span class="gallery__stat-label">Downloads</span>
              <span class="gallery__stat-value">${p.toLocaleString()}</span>
            </div>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){c.innerHTML=""}function b(){g.classList.add("is-visible")}function n(){g.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",E);function E(r){r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(!s){i.warning({title:"Empty field",message:"Please enter a search query.",position:"topRight"});return}L(),b(),_(s).then(a=>{if(n(),a.hits.length===0){i.error({title:"Not found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}v(a.hits),i.success({title:"Done",message:`Found ${a.totalHits.toLocaleString()} images. Showing ${a.hits.length}.`,position:"topRight",timeout:3e3})}).catch(a=>{n(),console.error(a),i.error({title:"Request error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:5e3})})}
//# sourceMappingURL=index.js.map
