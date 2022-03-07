"use strict";

/////////////////////////////////////////////////////
// SAME

// Accepts two arrays. Return true if every value in first array has its corresponding value squared in the second array. Frequency of values must bee the same, order does not matter

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 3], [4, 4, 1]) // false

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arr1Freq = {};
  for (let val of arr1) {
    arr1Freq[val] ? arr1Freq[val]++ : (arr1Freq[val] = 1);
  }

  const arr2Freq = {};
  for (let val of arr2) {
    arr2Freq[val] ? arr2Freq[val]++ : (arr2Freq[val] = 1);
  }

  for (let key in arr1Freq) {
    if (!(key ** 2 in arr2Freq)) {
      return false;
    }
    if (arr1Freq[key] !== arr2Freq[key ** 2]) {
      return false;
    }
  }
  return true;
};

// Time complexity: O(n)

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 3], [4, 4, 1]));

/////////////////////////////////////////////////////
// VALID ANAGRAM

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false
// validAnagram("awesome", "awesom"); // false

const validAnagram = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  const str1Freq = {};
  for (let char of str1) {
    str1Freq[char] ? str1Freq[char]++ : (str1Freq[char] = 1);
  }

  for (let val of str2) {
    if (!str1Freq[val]) {
      return false;
    } else {
      str1Freq[val]--;
    }
  }
  return true;
};

// Time complexity: O(n)

// console.log(validAnagram("", ""));
// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("awesome", "awesom"));

/////////////////////////////////////////////////////
// SUM ZERO

// Accepts sorted array of integers and returns first pair where sum is 0. Return array with both values that sum to zero or undefined if a pair does not exist

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

///////////////////////////////////////////////////
// COUNT UNIQUE VALUES

// Accepts sorted array and counts the unique values in the array. Negative numbers will always be sorted

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// Time complexity: O(n)

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

////////////////////////////////////////////////////
// MAX SUBARRAY SUM

// Accepts array of integers and a number, n. Calculate the maximum sum of n consecutive elements in the array

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

// Time complexity - O(n)

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

/////////////////////////////////////////////////////
// CODING EXERCISES

// Frequency counter
const sameFrequency = (num1, num2) => {
  // False if different lengths
  if (num1.toString().length !== num2.toString().length) return false;

  // Create objects with frequency of each number
  const num1Freq = {};
  for (let num of num1.toString().split("")) {
    num1Freq[num] ? num1Freq[num]++ : (num1Freq[num] = 1);
  }

  const num2Freq = {};
  for (let num of num2.toString().split("")) {
    num2Freq[num] ? num2Freq[num]++ : (num2Freq[num] = 1);
  }

  // Check frequency of numbers is the same
  for (let key in num1Freq) {
    if (!num2Freq.hasOwnProperty(key)) return false;
    if (num1Freq[key] !== num2Freq[key]) return false;
  }
  return true;
};

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// Are there duplicates (frequency counter)
const areThereDuplicatesFreq = (...arg) => {
  const argFreq = {};

  for (let char of arg) {
    if (argFreq[char]) {
      return true;
    } else {
      argFreq[char] = 1;
    }
  }
  return false;
};

// console.log(areThereDuplicatesFreq(1, 2, 3)); // false
// console.log(areThereDuplicatesFreq(1, 2, 2)); // true
// console.log(areThereDuplicatesFreq("a", "b", "c", "a")); // true

// Are there duplicates (multiple pointers)
const areThereDuplicatesPointer = (...arg) => {
  arg.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while (next < arg.length) {
    if (arg[start] === arg[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

// console.log(areThereDuplicatesPointer(1, 2, 3)); // false
// console.log(areThereDuplicatesPointer(1, 2, 2)); // true
// console.log(areThereDuplicatesPointer("a", "b", "c", "a")); // true

// Are there duplicates (one liner)
const areThereDuplicatesOne = (...args) => {
  return new Set(args).size !== args.length;
};

// console.log(areThereDuplicatesOne(1, 2, 3)); // false
// console.log(areThereDuplicatesOne(1, 2, 2)); // true
// console.log(areThereDuplicatesOne("a", "b", "c", "a")); // true

// Average pair
const averagePair = (arr, num) => {
  if (arr.length < 2) return false;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let avg = (arr[i] + arr[j]) / 2;
    if (avg === num) return true;
    else if (avg > num) {
      j--;
    } else i++;
  }
  return false;
};

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// Is subsequence
const isSubsequence = (subStr, fullStr) => {
  let i = 0;

  for (let j = 0; j < fullStr.length; j++) {
    if (subStr[i] === fullStr[j]) {
      i++;
    }
    if (i === subStr.length) return true;
  }
  return false;
};

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)

// Max subarray sum
const maxSubarraySum2 = (arr, num) => {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let j = 0; j < arr.length - num; j++) {
    tempSum = tempSum - arr[j] + arr[j + num];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

// console.log(maxSubarraySum2([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum2([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum2([2, 3], 3)); // null

// Min subarray length
const minSubarrayLen = (arr, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

// console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
// console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2
// console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// Find longest substring
const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbbb")); // 1
