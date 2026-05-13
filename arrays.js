let values = [1,2,3,"Apples","Samsung",false]
console.log(values)

console.log(values[4])
values[5] = true
console.log(values)

//length
console.log(values.length)

//at() method
console.log(values.at(5))
console.log(values.at(-2))//Samsung

//slice
console.log(values.slice(2,5))

//adding items with push at the end
values.push("HP",8,9,10)
console.log(values)

//adding items with unshift at the beginning
values.unshift("Mango",("Peach"))
console.log(values)

//removing values with pop
values.pop()
console.log(values)

//removing values with shift
values.shift()
console.log(values)


//includes
console.log(values.includes(8))
console.log(values.includes("Peach"))
console.log(values.includes(5))


//spread operator
let num1 = [10,20,30]
let num2 = [40,50,60]
let num3 = [...num1,...num2]
console.log(num3)

