# Capacitor template

Kostur Capacitor aplikacije od čistog HTML-a, CSS-a i JavaScripta (Vite samo za build, bez frameworka), kao `cordova create`, samo s Capacitorom. Web kod je u `src/`, nativni projekti se generiraju.

## Početak (redoslijed je bitan)

```bash
cp -R capacitor-template moja-aplikacija && cd moja-aplikacija
git init
madelog init                 # PRIJE prvog commita; ispuni .madelog/intent.md
```

1. U `capacitor.config.json` promijeni `appId` i `appName`, u `package.json` `name`.
2. Ispuni `PRD.md` (u .gitignore je: poslovni dokument ne ide u git). Tek onda kod.
3. Instalacija i prva provjera:

```bash
bun install
bun run test
bun run build
bunx cap add ios             # ili android; jednom
bun run sync                 # build + cap sync
bunx cap open ios            # Xcode: odaberi Team, ⌘R
```

## Mape

```
index.html         ulazna stranica Vitea
src/main.js        ulaz: hash rute + donja navigacija (nav je u index.html)
src/views/         ekrani (funkcije koje crtaju u <main>)
src/services/      stanje + pristup pluginima
src/native.js      jedino mjesto za @capacitor/* pakete
src/lib.js         čista logika bez Capacitora i DOM-a (testira se)
src/*.test.js      vitest
capacitor.config.json  appId, appName, webDir (dist)
CLAUDE.md          pravila za Claude Code (kopiraj pravila u svoj projekt)
PRD.md             predložak zahtjeva
ios/ android/      nastaju s `cap add`, ne uređuju se ručno
```

## Naredbe

| Naredba | Radnja |
|---|---|
| `bun run dev` | Vite dev server u pregledniku (plugini rade kao web fallback) |
| `bun run test` | vitest |
| `bun run build` | Vite build u `dist/` |
| `bun run sync` | build + `cap sync` |

## Proces uz AI

`madelog init` → PRD → plan → test prvi → mali commitovi → review drugim razgovorom → `madelog note` za svaku odluku. `madelog publish` samo svjesno: šalje stranicu na javni server.

Android treba JDK i Android Studio; iOS treba Xcode. S besplatnim Apple ID-em aplikacija na iPhoneu vrijedi 7 dana.
