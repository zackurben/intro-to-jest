'use strict';

const { sum, sumP, sumC } = require('./');

test('sum without arguments returns 0', () => {
  expect(sum()).toBe(0);
});

test('sum of 1 and 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sumP returns a promise', () => {
  expect(sumP(1, 2)).toBeInstanceOf(Promise);
});

test('sumP of 3 and 4 is 7', () =>
  sumP(3, 4).then(val => {
    expect(val).toBe(7);
  }));

test('sumC without a arguments returns undefined', () => {
  expect(sumC()).toBeUndefined();
});

test('sumC without a callback returns undefined', () => {
  expect(sumC(1)).toBeUndefined();
});

test('sumC of 1 with a callback returns 1', () => {
  sumC(1, value => {
    expect(value).toBe(1);
  });
});
