# Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

Object methods

- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)
- hasOwnProperty - O(1)

# Big O of Arrays

- Insertion - depends
  - Adding to end of array is O(1) - (push)
  - Inserting at beginning is O(n) b/c have to reindex (shift)
- Removal - depends
  - Adding to end of array is O(1) - (pop)
  - Removing from beginnging is O(n) - (unshift)
- Searching - O(n)
- Access- O(1)

Array methods

- sort - O(n \* logn)
- forEach/map/reduce/filter - O(n)
