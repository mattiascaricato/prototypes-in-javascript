var person = Object.create(null)

person.firstName = 'John'
person['lastName'] = 'Doe'

var propertyKey = 'ag'

person[propertyKey + 'e'] = 40
