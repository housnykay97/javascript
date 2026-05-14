// 1. Create a new file called objectTask and attempt the below questions:
// my_arr = [23,"Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}], 987, 76, "John"]

// Display:
// KES
let my_arr = [23,"Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}], 987, 76, "John"]
console.log(my_arr[3][2]["currency"])
// or console.log(my_arr[3][2].currency)


// 560
console.log(my_arr[2])


// Maths
console.log(my_arr[3][1])


// 2. In the object with the key currency, add another key "amount" with value 90
console.log(my_arr[3][2][2] = {"amount" : 90})
console.log(my_arr)


// 3. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
// Hint: arrays can be reversed using reverse() functions
// my_arr[4]= Number(String(my_arr[4]))

my_arr[4] = Number(String(my_arr[4]).split('').reverse().join(''))
console.log(my_arr)



// 4. Change the name “John” to “Jane” . 
my_arr[6] = "Jane"
console.log(my_arr)


