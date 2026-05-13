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