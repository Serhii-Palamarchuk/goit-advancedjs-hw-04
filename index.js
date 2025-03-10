import{a as c,S as u,i}from"./assets/vendor-B4AqCRBk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const d="49211573-98fed09fb52bd65ccaa252580";c.defaults.baseURL="https://pixabay.com/api/";async function f(s,o=1,n=3){try{return(await c.get("",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}})).data}catch(e){return console.error("Error fetching images:",e),{hits:[]}}}function p(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${e.likes}</p>
                <p>👁 ${e.views}</p>
                <p>💬 ${e.comments}</p>
                <p>⬇️ ${e.downloads}</p>
            </div>
        </a>
    `).join(""),new u(".gallery a").refresh()}const y=document.querySelector("#search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");y.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.search.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search query!"});return}l.style.display="block",m.innerHTML="",await new Promise(e=>setTimeout(e,350));const n=await f(o);l.style.display="none",n.hits.length===0?i.warning({title:"No Results",message:"Sorry, no images found!",position:"center"}):p(n.hits)});
//# sourceMappingURL=index.js.map
