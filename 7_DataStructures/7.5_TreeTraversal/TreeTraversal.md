# Tree Traversal

- Breadth-first Search (BFS)
- Depth-first Search (DFS)
  - In Order
  - Pre Order
  - Post Order

## BFS vs DFS

- Time complexity - same for both, visit every node once

- Wide tree (more common):

  - BFS - have to store a lot of data in the queue, high space complexity
  - DFS - fewer nodes to keep track of, lower space complexity

- Long tree:
  - BFS - will store less in the queue, lower space complexity
  - DFS - will store a lot of data in queue, higher space complexity

## DFS: PreOrder vs PostOrder vs InOrder

**Differences not as significant**

- InOrder - returns nodes in their underlying order
- PreOrder - can be used to "export" a tree structure so that it can easily be reconstructed

## Recap

- Trees are non-linear data structures that contain a root and child nodes
- Binary trees can have values of any type, but at most two children for each parent
- Binary search trees are a more spceific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through trees with BFS and DFS
