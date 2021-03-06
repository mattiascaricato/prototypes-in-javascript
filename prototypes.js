// Creating an empty object
var person = Object.create(null)

// person ----> null

// Adding methods
person.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

// Sets person as the man's prototype
var man = Object.create(person)
man.sex = 'male'

// man ----> person ----> Object.prototype ----> null

// Sets man as the john's prototype
var john = Object.create(man)
john.firstName = 'John'
john.lastName = 'Doe'

// john ----> man ----> person ----> Object.prototype ----> null

console.log(john.sex)
console.log(john.fullName())
