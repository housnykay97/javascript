let x = 5
let y = 10
let z = x + y
console.log(z) //15



// this function is not reusable bcz it's adding fixed values
function add_values() { 
    let x = 5
    let y = 10
    return x + y
}
let sum = add_values()
console.log(sum)


// global scope
function add_values() {
    let number = 15         // number is a local scope(inside the block, accessible from the block only and cannot be changed)
    return number + x       // x is a global scope(outside the block, accessible from anywhere and can be changed)
}

let sum = add_values()
console.log(sum)



// this function is reusable
function add_values(x,y) {      
    return x + y      
}

let sum1 = add_values(3,4)
let sum2 = add_values(5,6)
console.log(sum1)
console.log(sum2)