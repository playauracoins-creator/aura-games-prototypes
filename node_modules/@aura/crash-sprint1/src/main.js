const app = document.getElementById("app");

app.innerHTML = `
  <h1>Crash  Sprint 1</h1>
  <p>Scaffold is running. This page proves the package builds and serves.</p>
  <ul>
    <li>Vite dev server works</li>
    <li>Build output goes to <code>/dist</code></li>
  </ul>
`;

let frames = 0;
let last = performance.now();
function loop(ts) {
  frames++;
  if (ts - last >= 1000) {
    console.log(`FPS ~ ${frames}`);
    frames = 0;
    last = ts;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
