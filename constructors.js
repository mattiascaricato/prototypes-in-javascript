var Person = function (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype = {
  toString: function () {
    return this.firstName + ' ' + this.lastName
  }
}

var john = new Person('John', 'Doe')
console.log(john.toString())
