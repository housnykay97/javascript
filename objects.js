let person = {
    name : "jane Doe",
    age : 29,
    address : "123 Kimathi St",
    "is employed": true
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person["is employed"])
console.log(person["address"])

console.log(Object.keys(person))// ['name', 'age', 'address', 'is employed']
console.log(Object.values(person))// ['jane Doe', 29, '123 Kimathi St', true]
console.log(Object.entries(person))//  ['name', 'jane Doe']

person.name = "Alice"
console.log(person) // {name: 'Alice', age: 29, address: '123 Kimathi St', is employed: true}

// Creating an empty object
// Adding properties to the object

let myObject = { }
myObject.name = "John"
myObject.age = 25
myObject['location'] = 'New York'

console.log(myObject)


// Accessing properties
console.log(myObject.name)     // Output: John
console.log(myObject['age'])   // Output: 25

// Nested objects
myObject.address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
}

// Accessing properties in nested objects
console.log(myObject.address.city);  // Output: Anytown


