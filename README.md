# Prototypes in Javascript

JavaScript is an object-based language based on prototypes, rather than being class-based.

## Objets
In JavaScript, objects are pairs of keys and values (in Ruby, this structure is called a Hash; in Python, it's called a dictionary).

## Prototypes
Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype. `null`, by definition, has no prototype, and acts as the final link in this prototype chain.

## Accessing a property
When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.


`[[Prototype]]` is looked at recursively, i.e. a1.doSomething, Object.getPrototypeOf(a1).doSomething, Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething etc., until it's found or Object.getPrototypeOf returns null.

## Objet Literals
Object literals set the newly created object's prototype to an object located at Object.prototype.

## Constructors
A constructor in JavaScript is just a function that happens to be called with the new operator.

## Scope
When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own prop

All the stuff you define in prototype is effectively shared by all instances, and you can even later change parts of prototype and have the changes appear in all existing instances, if you wanted to.

## Performance
* nonexistent properties will always traverse the full prototype chain
* Do not iterate over properties, use hasOwnProperty
* Do not extend a built-in prototype (breaks encapsulation)
