import { jeNativno, procitaj, spremi } from '../native.js';
import { poruka } from '../lib.js';

// Stanje + pristup pluginu na jednom mjestu, view samo prikazuje.
export async function otvaranja() {
  const n = Number((await procitaj('otvaranja')) ?? 0) + 1;
  await spremi('otvaranja', String(n));
  return poruka(jeNativno(), n);
}
