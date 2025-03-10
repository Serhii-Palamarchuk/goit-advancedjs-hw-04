import{a as l,S as u,i as a}from"./assets/vendor-B4AqCRBk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="49211573-98fed09fb52bd65ccaa252580";async function f(n){const o="https://pixabay.com/api/";try{return(await l.get(o,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(s){return console.error("Error fetching images:",s),{hits:[]}}}function p(n){const o=document.querySelector(".gallery");o.innerHTML=n.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${r.likes}</p>
                <p>👁 ${r.views}</p>
                <p>💬 ${r.comments}</p>
                <p>⬇️ ${r.downloads}</p>
            </div>
        </a>
    `).join(""),new u(".gallery a").refresh()}const y=document.querySelector("#search-form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.search.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query!"});return}c.style.display="block",m.innerHTML="",await new Promise(r=>setTimeout(r,350));const s=await f(o);c.style.display="none",s.hits.length===0?a.warning({title:"No Results",message:"Sorry, no images found!",position:"center"}):p(s.hits)});
//# sourceMappingURL=index.js.map
