# Problem Solving Approach

Algorithm - process or set of steps to accomplish a certain task

## 1. Understand the problem

- Can I restate the problem in my own words
- What are the inputs
- What are the outputs
- Can outputs be determined from inputs
- How should I label important pieces of data

## 2. Concrete examples

- Examples can help you understand the problem better
- Given an input, what is the output
  - User stories
  - Unit tests
- Exploring examples
  - Start with simple examples
  - Progress to more complex examples
  - Explore examples with empty inputs
  - Explore examples with invalid inputs

## 3. Break it down

- Explicity write out the steps you need to take
  - Forces you to think about the code you will write

## 4. Solve or Simplify

- Solve the parts of the problem you are able to, might help you break down more complex parts

## 5. Look back and refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

# Problem Solving Patterns

## Frequency Counter Pattern

Use objects or sets to collect values/frequencies of values

- Can often avoid the need for nested loops or O(n\*2) operations with arrays/strings

## Multiple Pointers Pattern

Creating pointers or values that correspond to an index or position and movie towards the beginning, end, or middle based on a certain condition.

- Very efficient for solving problems with minimal space complexity as well

## Sliding Window Pattern

Create a window with cna either be an array or number from on position to another. Depending on certain conditions, the window either increases or closes (an a new window is created).

- Very useful for keeping track of a subset of data in an array/string etc.

## Divide and Conquer Pattern

Divide a dataset into smaller chunks and then repeat a process with a subset of data

- Can drastically decrease time complexity
