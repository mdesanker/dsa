"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return null;
        else if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else found = true;
    }
    if (!found) return null;
    return current;
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else return true;
    }
    return false;
  }

  BFS() {
    let node = this.root;
    const queue = [];
    const data = [];

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    let current = this.root;
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(current);
    return data;
  }

  DFSInOrder() {
    const data = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

//     10
//   6    15
// 3  8     20

// console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]

console.log(tree.DFSPreOrder()); // [10, 6, 3, 8, 15, 20]
console.log(tree.DFSPostOrder()); // [3, 8, 6, 20, 15, 10]
console.log(tree.DFSInOrder()); // [3, 6, 8, 10, 15, 20]
