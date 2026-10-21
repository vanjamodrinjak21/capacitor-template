import { expect, test } from 'vitest';
import { poruka } from './lib.js';

test('poruka razlikuje preglednik i aplikaciju', () => {
  expect(poruka(false, 1)).toBe('Preglednik: otvoreno 1 put(a).');
  expect(poruka(true, 3)).toBe('Aplikacija: otvoreno 3 put(a).');
});
