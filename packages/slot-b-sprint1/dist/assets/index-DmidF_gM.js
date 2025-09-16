(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const d=document.getElementById("app");d.innerHTML=`
  <h1>Slot B  Sprint 1</h1>
  <p>Scaffold is running. This page proves the package builds and serves.</p>
  <ul>
    <li>Vite dev server works</li>
    <li>Build output goes to <code>/dist</code></li>
  </ul>
`;let n=0,l=performance.now();function c(r){n++,r-l>=1e3&&(console.log(`FPS ~ ${n}`),n=0,l=r),requestAnimationFrame(c)}requestAnimationFrame(c);
