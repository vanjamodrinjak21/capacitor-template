// Čista logika bez Vuea i Capacitora: lako se testira.
export const poruka = (nativno, otvaranja) =>
  `${nativno ? 'Aplikacija' : 'Preglednik'}: otvoreno ${otvaranja} put(a).`;
