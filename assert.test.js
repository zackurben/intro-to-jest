'use strict';

test('this is the identifier for my test', () => {
  expect(null).toBeNull();
  expect(NaN).toBeNaN();
  expect(undefined).toBeUndefined();
  expect([]).toBeInstanceOf(Array);
  expect(1).toBeTruthy();
  expect(true).toBe(true);
  expect({ foo: 'bar' }).toHaveProperty('foo', 'bar');
});

// test('this wont pass', () => {
//   expect(NaN).toBeTruthy();
// });
