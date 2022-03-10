# Trees

- A data structure that consists of nodes in a parent/child relationship

  - Nodes cannot point to siblings (graph)
  - Trees must have 1 root

- Trees - nonlinear

## Terminology

- Root - the top node in a tree
- Child - a node directly connected to another node
- Parent the converse notion of a child
- Siblings - a group of nodes with the same parent
- Leaf - a node with no children
- Edge - the connection between one node and another

## Applications

- HTML DOM
- Network routing
- Abstract syntax trees
- Artifical intelligence
- Folders in operating systems

## Kinds of trees

- Trees - each node can have any amount of children
- Binary Trees - each node can have at most 2 children
- Binary Search Trees (BST):
  - Every parent has at most 2 chilren per node
  - Every node to the left of a parent node is **always less** than the parent
  - Every node to the right of a parents is **always greater** than the parent

## Big O Notation BST

- Insert - O(logn)
- Searching - O(logn)

Doubling number of nodes, only increases number of steps to insert/find by 1

(NOT guaranteed - one sided bst with a million values)
