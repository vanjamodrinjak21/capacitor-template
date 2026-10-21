import './style.css';
import { pocetna } from './views/pocetna.js';
import { oAplikaciji } from './views/o-aplikaciji.js';

// Hash rute: rade bez konfiguracije poslužitelja i u WebViewu (jedan index.html).
const rute = { '/': pocetna, '/o-aplikaciji': oAplikaciji };

async function prikazi() {
  const put = location.hash.slice(1) || '/';
  const view = rute[put] ?? pocetna;
  document.querySelectorAll('nav a').forEach((a) => {
    a.classList.toggle('aktivan', a.getAttribute('href') === `#${put}`);
  });
  await view(document.getElementById('app'));
}

addEventListener('hashchange', prikazi);
prikazi();
