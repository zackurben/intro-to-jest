'use strict';

/**
 * Get the sum of the input as a number.
 * 
 * @param {*} args
 *   The arguments to sum.
 * 
 * @returns {Number}
 *   The sum of the input variables or 0.
 */
const sum = (...args) =>
  args.filter(Number).reduce((sum, value) => sum + value, 0);

/**
 * Get the sum of the input as a delayed promise.
 * 
 * @param {*} args
 *   The arguments to sum.
 * 
 * @returns {Promise}
 *   The promise of the sum.
 */
const sumP = (...args) =>
  new Promise(resolve =>
    setTimeout(() => resolve(sum.apply(this, args)), 1000)
  );

/**
 * Get the sum of the input as a callback value.
 * 
 * @param {*} args
 *   The arguments to sum with a callback.
 */
const sumC = (...args) => {
  const cb = args.pop();
  if (!cb || typeof cb !== 'function') {
    return undefined;
  }

  return cb(sum.apply(this, args));
};

module.exports = {
  sum,
  sumP,
  sumC
};
