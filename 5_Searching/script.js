"use strict";

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

// Time complexity - O(n)

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 10)); // -1

// const binarySearch = (arr, val) => {
//   let start = 0;
//   let end = arr.length - 1;
//   if (val > arr[end] || val < arr[0]) return -1;
//   while (start <= end) {
//     if (arr[start] === val) return start;
//     if (arr[end] === val) return end;
//     let mid = Math.floor((end - start) / 2);
//     if (arr[mid] === val) return mid;
//     else if (arr[mid] < val) start = mid;
//     else end = mid;
//   }
// };

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + start) / 2);
  while (arr[middle] !== val && start <= end) {
    if (arr[middle] > val) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((end + start) / 2);
  }
  return arr[middle] === val ? middle : -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

const naiveStringSearch = (str, sub) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== str[i + j]) break;
      if (j === sub.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveStringSearch("harold said haha in hamburg", "haha")); // 1
console.log(naiveStringSearch("wowomgzomg", "omg")); // 2
console.log(naiveStringSearch("harold said haha in hamburg", "omg")); // 0
