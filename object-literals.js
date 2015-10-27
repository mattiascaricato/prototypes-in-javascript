// Creates an object and assign properties to it at one time
var foo = {
  firstName: 'Foo',
  lastName: 'Bleh'
}

// This syntax is approximately sugar for
// var foo = Object.create(Object.prototype)
// foo.firstName = 'Paul'
// foo.lastName = 'Irish'

console.log(Object.getPrototypeOf(foo))

console.log(Object.getOwnPropertyNames(Object.prototype))

// Object.getOwnPropertyNames(Object.prototype)
// [ 'constructor',
//   'toString',
//   'toLocaleString',
//   'valueOf',
//   'hasOwnProperty',
//   'isPrototypeOf',
//   'propertyIsEnumerable',
//   '__defineGetter__',
//   '__lookupGetter__',
//   '__defineSetter__',
//   '__lookupSetter__',
//   '__proto__' ]

console.log(john.toString()) // '[object Object]'

var john = {
  firstName: 'John',
  lastName: 'Doe',
  toString: function () {
    return this.firstName + ' ' + this.lastName
  }
}

console.log(john.toString())
