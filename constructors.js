// Creates a constructor function
var Person = function (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Person ----> Function.prototype ----> Object.prototype ----> null

// Sets the function's prototype property to the object that we want the new object's prototype to be
Person.prototype = {
  toString: function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Person.prototype ----> Object.prototype ----> null

var john = new Person('John', 'Doe')
console.log(john.toString())

// john ----> Person.prototype ----> Object.prototype ----> null

//  So, when you call
// var foo = new Foo()
// JavaScript actually just does
// var foo  = new Object()
// foo.[[Prototype]] = Foo.prototype;
// Foo.call(foo);
