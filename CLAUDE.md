# CLAUDE.md

## Stack
Vue 3 + vue-router (SPA, hash povijest) + Vite + Capacitor, običan JavaScript. Paketi: samo bun (bunx), nikad npm/yarn. Nema package-lock.json.

## Pravila
- Stanje i pristup pluginima idu u `src/composables/`, viewovi samo prikazuju.
- Capacitor plugini se importaju samo u `src/native.js`. Ostatak koda zove njegove funkcije.
- Prije koda: prvo `PRD.md` pa plan pa test koji pada pa kod.
- `ios/` i `android/` su generirani: ne diraj ih ručno osim potpisivanja i dozvola (`Info.plist`).
- Verzije i API-je plugina provjeri u dokumentaciji ili registru, ne po sjećanju.
- Tvrdnja "radi" znači ispis naredbe: `bun run test`, `bun run build`, simulator.
- Nikad ne čitaj niti commitaj `.env`, ključeve ni certifikate.
- Conventional commits (feat:, fix:, chore:). Mali commitovi, jedan problem po commitu.
- Odluku (biblioteka, odbijen pristup, smanjen opseg) odmah zapiši: `madelog note "Chose X, not Y: razlog."`

## Naredbe
- `bun run dev` Vite dev server (plugini rade kao web fallback)
- `bun run test` vitest
- `bun run build` Vite build u `dist/`
- `bun run sync` build + `cap sync`
