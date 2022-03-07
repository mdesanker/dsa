"use strict";

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || !arr2[j]) {
      result = result.concat(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || !arr1[i]) {
      result = result.concat(arr2[j]);
      j++;
    }
  }
  return result;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

// Complexity:
//  - Time: O(n logn)
//  - Space: O(n)

console.log(mergeSort([100, 50, 2, 10, 1, 99, 14]));
