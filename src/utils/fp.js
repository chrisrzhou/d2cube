import {isPlainObject, k, props} from 'uinix-fp';

export const and = (fs) => (x) => fs.reduce((acc, f) => f(x) && acc, true);

export const not = (f) => (x) => !f(x);

export const or = (fs) => (x) => fs.reduce((acc, f) => f(x) || acc, false);

export const cb = (f) => (x) => isEmpty(x) ? x : f(x);

export const concat = (x) => (xs) =>
  isEmpty(x) ? xs : xs.concat(Array.isArray(x) ? x : [x]);

export const fill = (n) => (f) => range(0)(n).map(f);

export const fillNull = (n) => fill(n)(k(null));

export const floor = (x) => Math.floor(x);

export const join = (delimiter) => (xs) => xs.join(delimiter);

export const isEmpty = (x) => x === null || x === undefined;

export const isPropValueEqual = (prop) => (value) => (x) =>
  props(prop)(x) === value;

export const add = (x) => (y) => x + y;

export const multiply = (x) => (y) => x * y;

export const percent = (x) => (x + 100) / 100;

export const range = (x1) => (x2) =>
  Array.from({length: x2 - x1}).map((_, i) => i + x1);

export const sum = (xs) => xs.reduce((acc, x) => acc + x, 0);

export const size = (xs) =>
  isPlainObject(xs) ? Object.keys(xs).length : xs.length;
