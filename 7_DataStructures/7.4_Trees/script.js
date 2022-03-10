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

  // find(value) {
  //   if (!this.root) return false;
  //   if (value === this.root.value) return current;
  //   let current = this.root;
  //   while (true) {
  //     if (value === current.value) return current;
  //     if (value < current.value) {
  //       if (current.left) {
  //         current = current.left;
  //       } else return false;
  //     } else if (value > current.value) {
  //       if (current.right) {
  //         current = current.right;
  //       } else return false;
  //     }
  //   }
  // }

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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(15);
