// Creating an empty object
var person = Object.create(null)

// Adding methods
person.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

// Sets person as the man's prototype
var man = Object.create(person)
man.sex = 'male'

// Sets man as the john's prototype
var john = Object.create(man)
john.firstName = 'John'
john.lastName = 'Doe'

console.log(john.sex)
console.log(john.fullName())
