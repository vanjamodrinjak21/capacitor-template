// Čista logika bez Capacitora i DOM-a: lako se testira.
export const poruka = (nativno, otvaranja) =>
  `${nativno ? 'Aplikacija' : 'Preglednik'}: otvoreno ${otvaranja} put(a).`;
