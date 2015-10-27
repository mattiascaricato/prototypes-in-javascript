// Creates an empty object
var person = Object.create(null)

person.name // undefined
person.coolMethod() // undefined is not a function

// Adds some properties
person.firstName = 'John'
person['lastName'] = 'Doe'

var propertyKey = 'ag'

person[propertyKey + 'e'] = 40

// Adds methods
person.fullName = function () {
  return this.firstName + ' ' + this.lastName
}
