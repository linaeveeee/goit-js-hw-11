import{a as p,S as h,i as c}from"./assets/vendor-CNpXvI_o.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="48830775-40ff68ea61f2bc47ba43ee541",y="https://pixabay.com/api/";function b(o){return p.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw console.error("Error fetching data from Pixabay API:",t),t})}const l=document.querySelector("#gallery");function L(o){l.innerHTML="";const t=o.map(({largeImageURL:a,webformatURL:e,tags:r,likes:n,views:f,comments:d,downloads:m})=>`
<a href="${a}" class="gallery-item">
  <img src="${e}" alt="${r}" />
  <div class="image-info">
    <p><b>Likes</b> ${n}</p>
    <p><b>Views</b> ${f}</p>
    <p><b>Comments</b> ${d}</p>
    <p><b>Downloads</b> ${m}</p>
  </div>
</a>
`).join("");l.innerHTML=t,new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const s={form:document.querySelector("#search-form"),input:document.querySelector("#search-input"),loader:document.querySelector("#loader"),gallery:document.querySelector("#gallery")};function S(){s.loader.classList.remove("hidden")}function u(){s.loader.classList.add("hidden")}function P(o){o.preventDefault();const t=s.input.value.trim();if(!t){c.error({title:"Error",message:"Oops! You forgot to enter a search term.",position:"topRight",timeout:2e3});return}S(),b(t).then(i=>{u(),i.length===0?c.info({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3}):L(i)}).catch(()=>{u(),c.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight",timeout:3e3})})}s.form.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
