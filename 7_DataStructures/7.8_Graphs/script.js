"use strict";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    return this;
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    const connections = this.adjacencyList[vertex];
    for (let connection of connections) {
      this.removeEdge(vertex, connection);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(start) {
    let result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function DFS(vertex) {
      if (adjacencyList[vertex].length === 0) return null;
      visited[vertex] = true;
      result.push(vertex);
      for (let neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) DFS(neighbor);
      }
    })(start);

    return result;
  }

  DFSIterative(start) {
    let stack = [start];
    let result = [];
    const visited = {};
    let current;

    visited[start] = true;

    while (stack.length) {
      current = stack.pop();
      result.push(current);

      for (let neighbor of this.adjacencyList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  BFS(start) {
    let queue = [start];
    let result = [];
    const visited = {};
    let current;

    visited[start] = true;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      for (let neighbor of this.adjacencyList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
