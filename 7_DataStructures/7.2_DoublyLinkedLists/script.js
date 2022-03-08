"use strict";

/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) return !!this.unshift(val);
    else if (index === this.length) return !!this.push(val);
    else {
      const prev = this.get(index - 1);
      const newNode = new Node(val);
      newNode.next = prev.next;
      prev.next.prev = newNode;
      newNode.prev = prev;
      prev.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index);
    const prevNode = removeNode.prev;
    const afterNode = removeNode.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    removeNode.prev = null;
    removeNode.after = null;

    this.length--;
    return removeNode;
  }
}

const list = new DoublyLinkedList();
list.push(23);
list.push("abc");
list.push("Harry");
list.push("Hermione");
*/

///////////////////////////////////////////////////
// EXERCISES

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = oldTail.prev;
      newTail.next = null;
      this.tail = newTail;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    const newHead = oldHead.next;
    newHead.prev = null;
    oldHead.next = null;
    this.head = newHead;
    this.length--;
    return oldHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;

    let current;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index);
    const beforeNode = removeNode.prev;
    const afterNode = removeNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.prev = null;
    removeNode.next = null;

    this.length--;
    return removeNode;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  reverse() {
    if (this.length < 2) return this;

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next = null;
    let prev = null;

    while (current) {
      next = current.next;
      current.next = prev;
      current.prev = next;

      prev = current;
      current = next;
    }

    return this;
  }
}

const list = new DoublyLinkedList();
