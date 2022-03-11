# Binary Heaps

- Very similar to BST
- In MaxBinaryHeap parent nodes are always larger than child nodes
- in MinBinaryHeap parent nodes are always smaller than child nodes

## MaxBinaryHeap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
  - No implied ordering between parents
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

## Common applications

- Priority queues
- Graph traversal algos

## Store binary heap in array

For any index of an array n:

- The left child is stored at `2n + 1`
- The right child is stored at `2n + 2`

For any child node at index n:

- Its parent is at index `Math.floor((n - 1) / 2)`

## Priority Queue

- DS where each element has a priority
- Elements with higher priorities are served before elements with lower priorities
- Separate from heap, but often implemented as heap

## Big O Notation Binary Heaps

Time complexity

- Insertion - O(logn)
- Removal - O(logn)
- Search - O(n)

Binary heaps aren't optimized for searching

## Recap

- Binary heaps are very useful DS for sorting and implementing other DS like priority queues
- Binary heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being larger or smaller than their children (respectively)
- With a little bit of math, can represent heaps using arrays
