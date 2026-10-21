import { ref } from 'vue';
import { jeNativno, procitaj, spremi } from '../native.js';
import { poruka } from '../lib.js';

// Composable: stanje + pristup pluginu na jednom mjestu, view samo prikazuje.
export function useOtvaranja() {
  const tekst = ref('Učitavam…');
  (async () => {
    const n = Number((await procitaj('otvaranja')) ?? 0) + 1;
    await spremi('otvaranja', String(n));
    tekst.value = poruka(jeNativno(), n);
  })();
  return { tekst };
}
