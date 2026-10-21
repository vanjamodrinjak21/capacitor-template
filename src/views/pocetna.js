import { otvaranja } from '../services/otvaranja.js';

// View samo prikazuje; stanje i pristup pluginima su u services/.
export async function pocetna(korijen) {
  korijen.innerHTML = '<h1>Moja aplikacija</h1><p>Učitavam…</p>';
  korijen.querySelector('p').textContent = await otvaranja();
}
