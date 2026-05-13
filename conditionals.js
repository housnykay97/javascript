let k = Number(prompt("Enter a number"))

if (k % 2 == 0) {
    console.log("Even number")
} else {
    console.log("Odd number")
}

//write a simple if statement to check eligibility of a voter
//assume a voter must be at least 18yrs

let age = Number(prompt("Enter age"))

if (age >= 18) {
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote")
}

let num1 = Number(prompt("Enter num1"))
let num2 = Number(prompt("Enter num2"))
let num3 = Number(prompt("Enter num3"))

if (num1 > num2 && num1 > num3) {
    console.log("Num1 is the largest")
} else if (num2 > num1 && num2 > num3) {
    console.log("Num2 is the largest")
} else {
    console.log("Num3 is the largest")
}

//write a program that determines ticket prices based on age:
// under 12 -> 500/=, under 18 -> 650/=, adults -> 800/=, over 60yrs -> 400/=
let age1 = Number(prompt("Enter your age"))

if (age1 > 0 && age1 < 12) {
    console.log("500/=")
} else if (age1 < 18) {
    console.log("650/=")
} else if (age1 >= 18) {
    console.log("400/=")
} else if (age1 > 60) {
    console.log("400/=")
} else {
    console.log("invalid input")
}


//write a program that checks whether the length of a username is at least 8 characters
//if length < 8, output "too short" otherwise output "Correct format"

let username = prompt("Enter username")

if (username.length < 8) {
    console.log("Too short")
} else {
    console.log("Correct format")
}


let n = Number(prompt("Enter Number"))
let even = n % 2 == 0 ? "Even" : "Odd" //A shorthand for writing simple if-else statements
console.log(even)

let voter_age = Number(prompt("Enter age"))
let voter = voter_age >= 18 ? "Eligible" : "Not eligible"
console.log(voter)



//TASK
//1.Create a variable and console log whether a number is odd or even

let z = Number(prompt("Enter a number"))

let zz = z % 2 == 0 ? "Even number" : "Odd number"
console.log(zz)


//2.Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.

let a = Number(prompt("Enter num1"))
let b = Number(prompt("Enter num2"))
let c = Number(prompt("Enter num3"))

if (a > b && a > c) {
    console.log("Num1 is the largest")
} else if (b > a && b > c) {
    console.log("Num2 is the largest")
} else {
    console.log("Num3 is the largest")
}


//3.Create a variable called year and enter the a random year. Check if the year is a leap year or not. 
// A leap year is a year that is divisible by 4 not divisible by 100 or divisible by 400.

let year = Number(prompt("Enter year"))

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year")
}


//4.Take as input from a user the temperature if the temperature is above 30°C display “The temperature is too high”,if the temperature  
//  is above 15 display “Normal temperature” otherwise display “Cold temperature”

let temp = Number(prompt("Enter temperature"))

if (temp > 30) {
    console.log("The temperature is too high")
} else if (temp > 15) {
    console.log("Normal temperature")
} else {
    console.log("Cold temperature")
}


//5.Write a js program that checks if a variable x is between 10 and 20 (inclusive) and if another variable y is greater than 100.
//  If both conditions are true, display"Conditions met", otherwise display"Conditions not met"

let x = 20
let y = 25

if ((x >= 10 && x <= 20) && (y > 100)) {
    console.log("Conditions Met")
} else {
    console.log("Conditions not met")
}


//6.Write a js program that checks if a variable password is equal to the string "secret123". If it is, display "Access granted",
// otherwise display"Access denied"

let password = prompt("Enter password")
const correct_password = "secret123"

if (password == correct_password) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}


//7.Write a js program that checks if a variable student_score is greater than 90. If true, check if the attendance is greater than 80.
// If both conditions are true, display "Excellent student", otherwise display "Good score, but attendance needs improvement"

let student_score = 85
let attendance = 82

if (student_score > 90) {
    if (attendance > 80) {
        console.log("Excellent student")
    } else {
        console.log("Good score, but attendance needs improvement")
    }
} else {
    if (attendance > 80) {
        console.log("Good attendance, but score needs improvement")
    } else {
        console.log("Needs improvement on both score and attendance")
    }
}

//8.Conditional Statement A student’s final grade is determined by their exam score (a number between 0 and 100) using the rules below: 
// If the score is 70 or above, the grade is A. If the score is 60 to 69, the grade is B. If the score is 50 to 59, the grade is C.
// If the score is 40 to 49, the grade is D. If the score is below 40, the grade is F. Task: Write a JavaScript program that: Stores a 
// student’s score in a variable. Uses if, else if, and else statements to determine the grade. Prints the grade to the console.

let exam_score = Number(prompt("Enter score"))

if (exam_score >= 70 && exam_score <= 100) {
    console.log("grade A")
} else if (exam_score >= 60 && exam_score <= 69) {
    console.log("grade B")
} else if (exam_score >= 50 && exam_score <= 59) {
    console.log("grade C")
} else if (exam_score >= 40 && exam_score <= 49) {
    console.log("grade D")
} else {
    console.log("grade F")
}


