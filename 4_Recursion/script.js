"use strict";

//  Countdown
const countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  } else {
    console.log(num);
    num--;
    countDown(num);
  }
};

// countDown(3);

// Sum range
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// console.log(sumRange(3));

// Factorial
const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(4)); // 24
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6

// Power
const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

// Factorial
const factorial2 = (num) => {
  if (num === 0) return 1;
  return num * factorial2(num - 1);
};

// console.log(factorial2(0)); // 1
// console.log(factorial2(4)); // 24

// Product of array
const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

// Recursive range
const recursiveRange = (num) => {
  if (num <= 0) return 0;
  return num + recursiveRange(num - 1);
};

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

// Fib
const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

// Reverse string
const reverse = (str) => {
  if (str.length === 1) return str[0];
  return str.charAt(str.length - 1) + reverse(str.slice(0, -1));
};

// console.log(reverse("awesome")); // "emosewa"
// console.log(reverse("rithmschool")); // "loohcsmhtir"

// Palindrome
const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str[0] === str.charAt(str.length - 1))
    return isPalindrome(str.slice(1, -1));
  else return false;
};

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// Some recursive
const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr, cb) => {
  if (arr.length === 1) return cb(arr[0]);
  if (cb(arr[0])) return true;
  else return someRecursive(arr.slice(1), cb);
};

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

// Flatten
const flatten = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
// console.log(flatten([[[[1]], [[2], [[[[[5]]]]]]]])); // [1, 2, 5]

// Capitalize first
const capitalizeFirst = (arr) => {
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(
    capitalizeFirst(arr.slice(1))
  );
};

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ["Car", "Taco", "Banana"]

// Nested even sum
const nestedEvenSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

const capitalizeWords = (arr) => {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
};

// console.log(capitalizeWords(["i", "am", "learning", "recursion"])); // ["I", "AM", "LEARNING", "RECURSION"]

const stringifyNumbers = (obj) => {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

let obj3 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// console.log(stringifyNumbers(obj3));
/*
{
  num: "1",
  test: [],
  data: {"
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};
*/

const collectStrings = (obj) => {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(collectStrings(obj[key]));
    }
  }
  return strings;
};

const obj4 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// console.log(collectStrings(obj4)); // ["foo", "bar", "baz"]
