import{a as c,S as u,i}from"./assets/vendor-B4AqCRBk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d="49211573-98fed09fb52bd65ccaa252580";c.defaults.baseURL="https://pixabay.com/api/";async function f(s){try{return(await c.get("",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){return console.error("Error fetching images:",t),{hits:[]}}}function p(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${r.likes}</p>
                <p>👁 ${r.views}</p>
                <p>💬 ${r.comments}</p>
                <p>⬇️ ${r.downloads}</p>
            </div>
        </a>
    `).join(""),new u(".gallery a").refresh()}const y=document.querySelector("#search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");y.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.search.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query!"});return}l.style.display="block",m.innerHTML="",await new Promise(r=>setTimeout(r,350));const n=await f(t);l.style.display="none",n.hits.length===0?i.warning({title:"No Results",message:"Sorry, no images found!",position:"center"}):p(n.hits)});
//# sourceMappingURL=index.js.map
