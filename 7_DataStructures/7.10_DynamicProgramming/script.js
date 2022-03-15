"use strict";

// Recurive fibonnaci
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// Complexity
//  - Time - O(2 ** n) BAD!!

// Memoized fibonnaci
const fibMemo = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

//  Complexity
//  - Time - O(n)

const fibTab = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

// Complexity
//  - Time - O(n)
