"use strict";

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         arr = swap(arr, i, j);
//         console.log(arr);
//       }
//     }
//   }
//   return arr;
// };

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr);
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        lowest = j;
      }
    }
    if (i !== lowest) arr = swap(arr, i, lowest);
    console.log(arr);
  }
  return arr;
};

// Time complexity:
//  - Worst/average: O(n**2)

// console.log(selectionSort([8, 3, 5, 2, 4, 1]));
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
