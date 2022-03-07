"use strict";

const swap = (arr, idx1, idx2) => {
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) arr = swap(arr, j + 1, j);
    }
  }
  return arr;
};

// Optimized with noSwaps variable
const bubbleSortSwap = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) arr = swap(arr, j + 1, j);
      noSwaps = false;
    }
    if (noSwaps) break;
  }
  return arr;
};

// Time complexity:
//  Average/Worst - O(n**2)
//  Best - O(n)

console.log(bubbleSortSwap([8, 3, 5, 2, 4, 1]));
