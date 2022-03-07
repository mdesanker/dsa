# Big O Notation

- What does better mean
  - Faster?
  - Less memory-intensive?
  - More readable?

Time complexity - analyzing runtime of an algorithm as size of the inputs increases

Space complexity - analyzing amount of additional memory needed in order to run algorithm

## Simplifying Big O Expressions

- Constants don't matter:

```
O(2n + 5) => O(n)
O(13n*2) => O(n*2)
```

- Small terms don't matter: `O(n*2 + 5n + 8) => O(n*2)`
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space complexity

Auxillary space complexity - space required by the algorithm, not including the space taken up by inputs

**Usually when talking about space complexity, we are talking about auxillary space complexity (focusing on what happens inside the algorithm)**

- Most primitives are constant space
- Strings are O(n) space (where n is length of string)
- Reference types are generally O(n), where n is the length (for arrays) or number o fkeys (for objects)
