"use strict";

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// console.log(getDigit(7323, 2));

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(digitCount(21388));

const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
};

// console.log(mostDigits([1234, 56, 7]));

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  console.log(maxDigitCount);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// Complexity
//  Time - O(nk) [n = length of array, k = number of digits (average)]
//  Space - O(n + k)
