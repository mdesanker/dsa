# Graphs

- A finite set of nodes and connections

## Terminology

- Vertex - node
- Edge - connection between nodes (only 1 edge from a given vertex to another vertex)
- Undirected graph - no direction associated with an edge
- Directed graph - direction assigned to edges
- Weighted graph - edges have values associated with them

## Storing Graphs

- Adjaceny matrix - 0s and 1s ina 2 dimensional matrix to show which vertices are connected by edges
- Adjaceny list - array or hash table with indices containing subarrays with connected vertices

## Adjaceny Matrix vs List Big O

- Matrix

  - Takes up more space (in sparse graphs)
  - Slower to iterate over all edges
  - Faster to look up specific edge

- List
  - Can take up less space (in sparse graphs)
  - Faster to iterate over all edges
  - Can be slower to lookup specific edge

Most data in the real world tends to lend itself to sparser and/or larger graphs --> Adjacency List

## Depth First Graph Traversal

- Prioritize visiting children before visiting neighbors

## Breadth First Graph Traversal

- Prioritize visiting neighbors before visiting children
