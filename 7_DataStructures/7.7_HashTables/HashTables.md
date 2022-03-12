# Hash Tables/Map

- Used to store key-value paris
- The are like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all the following operations: finding values, adding new values, removing values

## Examples:

- Python - dictionaries
- JavaScript - objects, maps (some restrictions)
- Java, Go, Scala - maps
- Ruby - hashes

## Hash Function

- Implement a hash table using an array

  - In order to look up values by key, we need a way to convert keys into valid array indices - hash function

- Takes data of arbitrary size and outputs data of fixed size

- Cannot work backwards

## What makes a good hash

- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields same output)

## Prime numbers

- The prime number in the hash is helpful in spreading out the keys more uniformly

- It is also helpful if the array that you're putting values into has a prime length

## Collision Handling

- Separate Chaining - store the multiple values at the sam eindex in array using more sophisticated data structure (e.g. array or linked list)
- Linear Probing - store collision at the next empty slot in the array

## Big O Notation

**Depends on how good your hash funciton is**

- Insert - O(1)
- Deletion - O(1)
- Access - O(1)

## Recap

- Collections of key-value paris
- Can find values quickly given a key
- Can add new key-values quickly
- Store data in a large array, and work by hashing the keys
- A good hash should be fast, distribute keys uniformly, an dbe deterministic
- Separate chaining and linear probing are two strategies use to deal with two keys that hash to the same index
