'use strict';

const sum = require('./').sum;

test('sum without arguments returns 0', () => {
  expect(sum()).toBe(0);
});

test('sum of 1 and 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
});
