# Stacks

- Collection of data
- LIFO data structure - the last element added to the stack will be the first element removed

## Array Implementation

- Use push/pop
- Use unshift/shift
  - O(n) complexity because have to reindex every element

**If using array, push/pop are better options**

## Linked List Implementation

- Similar to linked list but use shift/unshift instead of push/pop so that all operations are constant time

## Stack Big O of Stacks

- Insertion: O(1)
- Removal: O(1)
- Searching: O(1)
- Access: O(1)

## Stack Recap

- Stacks are a LIFO data structure where the last value is always the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember which pages you have visited and go back/forward) and much more
- They are not a built in data structure in JS but are relatively simple to implement

# Queues

- FIFO data structure (first in first out)

## Array Implementation

- Use push/shift
- Use ushift/pop

**No matter what, one of the operations will be O(n) if using array, better to use class implementation if performance is required**

## Linked List Implementation

- Add to the end and remove from the beginning so that both operations are constant time

## Queue Big O Notation

- Insertion: O(1)
- Removal: O(1)
- Searching: O(1)
- Access: O(1)

## Queue Recap

- Queues are FIFO data structure, all elements are first in first out (e.g. print queue)
- Queues are useful for processing tasks and are foundational for more complex data structures
- Insertion and removal can be done in O(1)
