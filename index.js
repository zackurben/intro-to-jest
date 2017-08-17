'use strict';

module.exports = {
  sum: (...args) => args.filter(Number).reduce((sum, value) => sum + value, 0)
};
