# Overview

- DS are collections of values, the relationships among them, and the functions or operations that can be applied to the data

- Different DS excel at different things. Some are highly specialized, while others are more generally used (e.g. arrays)

## ES2015 Class Syntax

- Class - a blueprint for creating objects with pre-defined properties and methods

### Syntax

- The class keyword creates a constant - CANNOT be redfined

- The method to create new objects MUST be called constructor

- Create new objects with `new` keyword

### Adding Methods

- Instance methods are associated with and can be used by every instance of a class

- Class methods are associated with the class
  - Add `static` keyword befor function declaration
  - Call method with `ClassName.staticMethod()`
  - Less commonly used

## Recap

- Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (aka an instance)

- Classes are blueprints that when created make objects known as instances

- Classes are created with the `new` keyword

- The `constructor` function is a special function that gets called when the class is instantiated

- Instance methods can be added to classes similar to methods in objects

- Class methods can be added using the `static` keyword
