'use strict';

/**
 * Implement method Sort
 */
// const rooms = [
//   { name: 'kitchen', square: 25 },
//   { name: 'living room', square: 18 },
//   { name: 'balcony', square: 7 },
//   { name: 'restRoom', square: 30 },
// ];

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    const cmp =
      compareFunction ??
      ((a, b) => {
        const A = String(a);
        const B = String(b);

        if (A < B) {
          return -1;
        }

        if (A > B) {
          return 1;
        }

        return 0;
      });

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
