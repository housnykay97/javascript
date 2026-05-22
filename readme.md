JAVASCRIPT

Introduction to JavaScript
JavaScript is the programming language of the web.
It can calculate, manipulate and validate data.
It can update and change both HTML and CSS.

Compiled languages vs interpreted languages (line by line)
Html CSS JavaScript -enable you run your application in your browser
Html – skeleton structure
CSS – style
JS – user interactivity 
JS – a programming language that interacts with the browser to create interactive and dynamic webpages

What do we use it for
1.User Interactivity -how a user interacts with a web page e.g. scroll, click, type, hover, focus
2.Reactivity -automatic loading of data without refreshing

Where to write JS
1.Internal JS – writing JS in HTML inside script tags <script></ script>
-> in the head section
-> in the body section (most common way)
2.External JS – writing JS in an external and separate JS file with .js extension
-> used when JS code is a lot or when a developer wants organization and separation of concerns

Variables
A named container used to store values
Variable Naming Rules
1.Variable names can only contain letters, digits, underscores and dollar signs
2.Variable names can only start with letters, underscores or dollar signs
3.Variable names are case sensitive e.g. x and X are two different variables
4.VN cannot be key words or reserved words
x=” Jane Doe ”
full_name=” Jane Doe ”

How to declare Variables in JS
1.let -> used when declaring a variable that can be reassigned or changed
2.const -> used when the value of the variable is meant to be a constant
3.var -> works just like let but is outdated(deprecated) – used in older browser versions(-replaced by let in modern JS)

Data Types in JS
1.String -set of character(s) enclosed in single/double quotations
2.Number -accounts for both whole(integers) and decimal(floats) numbers, all numerical values
3.Boolean -represents Truth values(true and false)

Console.log() -a function used to output data in the console window
Typeof -a function that returns the data type of a value/variable

Comments
->A way of documenting code
1.Single line comments -> //
2.Multiline comments -> */*/

String Methods
Methods: in-built functions that are used to manipulate data
Most methods are accessed using the dot operator
1.length -returns the no. of characters in a string. 
2.charAt() -returns the character of a string at a specified index
	Indexing is zero based (starts from zero)
	JS does not support negative indexing by default
3.slice() -extracts a portion of a string. Slice(start, end)
4.toLowerCase() -converting all string characters to uppercase
5.toUpperCase() - converting all string characters to lowercase
6.trim() -used to remove whitespaces from a string
7.trimStart() -removes whitespaces from the left side of a string
8. trim() -removes whitespaces from the right side of a string
9.concat() -method used to join or combine two or more strings – used in place of + to join strings
10.endsWith() -checks whether a string ends with a specified character or set of characters -returns a boolean
11.startsWith() -checks whether a string starts with a specified character or set of characters -returns a boolean.
12.replace() -used to replace one character with another

13.split() -splits a string using a specified separator and places the separated string into an array:
text.split(",")    // Split on commas
text.split(" “)   // Split on spaces
text.split("|")    // Split on pipe

14.substring() - substring() is similar to slice().
If you omit the second parameter, substring() will slice out the rest of the string.

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);  #Banana

substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); #Banana

15.includes() - checks if a string contains a specific substring, or if an array contains a specific element. It returns a simple boolean: true or false.
Using includes() with Strings
When used on a string, it checks if the sequence of characters exists anywhere inside the target string.
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.includes("fox"));   // true
console.log(sentence.includes("cat"));   // false

Numeric Operations/Methods
+Addition
-Subtraction
/Division
*Multiplication
**exponential (power)
% modulus
++ increment ->increase/add by 1
--decrement ->decrease or subtract by 1

Plus op -> overloading

Task
Task on slide 56

Type Coercion vs Type Conversion
Type coercion – this is the automatic conversion of data from one type to another -> this is done automatically by the computer/language.
Type conversion – also called casting. This is the manual conversion of data from one type to another and is done by the programmer./casting.

Digit string –a string that has only numeric values e.g. “543”
Polymorphism – an object is able to take on more than form
->Method overloading & operator overloading
+ 	can be used as an addition operator
can also be used for concatenation

Operators
-Special symbols/characters that are used to perform specific functions in programming
-Broadly we have 4 major categories of operators:
1.Arithmetic Operators – are used to perform arithmetic / mathematical operations
2.Logical Operators – used to control program logic
And : returns true only if all conditions are true. Represented by &&
Or : returns true if at least one is true. Represented by ||
Not : negates a boolean value
3.Comparison Operators – used to compare values (>, <)
== : loose equality ->only compares the value and not the data type (allows for type coercion)
=== : strict equality ->checks for both value and data type (no type coercion)
!= : loose inequality ->
!== : strict inequality
4.Assignment Operators – assigning values to variables
= : assign a value to a variable
+=
-=
*=
/=
**=
%=

CONDITIONAL STATEMENTS
These are structures that enable a program to make decisions based on some predefined rules/conditions.
They decide the course of action to be taken based on whether the condition is met
It is enforced by if else statements
If else statements syntax
If(condition){
//what happens if the condition is met
}else{
// what happens if the condition is not met
}

Multiple conditions to be met
If(condition){
//what happens if condition 1 is met
}else if(condition){
//what happens if condition 2 is met
}else if(condition){
// what happens if condition 3 is met
}else{
// what happens if all conditions are not met
}

Taking user input -> we use the prompt() function
->Any data coming from user input is a string

Ternary Operator
-A shorthand for writing simple if-else statements
-It uses the symbol ‘?’
-Only used for a scenario where only one condition has to be met
Let variable = condition ? what happens if condition is met : if condition is not met

Task 
Slide 69

DATA STRUCTURES(COLLECTIONS)
A programming structure used to hold multiple values
These values can be of the same data type or different data types
We have 2 types of data structures in JS:
1.Arrays
2.Objects

Arrays 
-A data structure that can hold multiple values of any data type
-It is the equivalent of lists in Python

Properties of arrays
1.They can hold multiple values of any data type
2.They are ordered – values can be accessed using index
			-Indexing is zero based (there is no -ve indexing in JS arrays)
3.They are mutable – they can be changed
4.They are represented using square brackets
5.Values in an array are comma-separated
6.They have methods

Array Methods
1.Accessing values in an array -> use indexing (zero-based)
=>if you want to use -ve indexing you have to use the .at() method
2.at() allows you to access values in an array using both zero based and -ve indexing
3.Updating values in an array -> uses indexing
4.length -> determines the no of items in an array
5.slice() -> extracts a portion of an array -> slice (start, end)
6.Adding items to an array
->push() : adds items at the end of an array
->unshift() : adds items at the start of an array
7.Removing items from an array
->pop() : removes the last element of an array
->shift() : removes the first element of an array
8.Includes() -> checks whether a value is contained in an array(returns a Boolean value)
9.join() -> 

Task 
1.Find out what the following methods do:
-> concat() -The polite way to join arrays or strings. It is non-mutating-it doesn’t touch your original data; it just returns a brand-new combined version.

->sort() -By default, .sort() sorts elements alphabetically but this works fine for strings. It is disastrous for numbers

->splice() -unlike .slice(), which just takes a “copy” of a section, .splice() mutates the original array by adding, removing, or replacing elements.
It’s used in three ways;
Removing -> arr1.splice(1, 2) -Starts at index one and removes 2 items.
Adding -> arr1.splice(2, 0, "x") -Starts at index 2, removes 0 items, and inserts "x".
Replacing -> arr1.splice(1, 1, "y") -Starts at index 1, removes 1 item, and puts "y" in its place.
NB: .splice() returns an array of the deleted items. If you don’t delete anything, it returns an empty array[].

2.slide 72 & 73

Spread operator
->used to unpack array values onto another array, can be used to merge or combine arrays.

Why indexing starts from zero – the index represents how far you have traveled from the start, not which “count” you are on.

OBJECTS
-> A data structure that stores values in key value pairs
->This is the equivalent of dictionaries in Python

Properties of Objects
-Stores data in key-value pairs
-Keys are considered to be strings
-Values can be of any data type
-They are mutable
-We use the keys to access the values
-Represented using {}

Why use objects
1.To store related data
2.To represent real world entities
3.To store complex data in a structured manner

name : "jane Doe",->a key value pair (property)
Property => key + value

Object Operations
1.Accessing values in objects : key is used to access values in objects
we have 2 ways of accessing values using keys.
	=>dot notation : used when the key follows identifier naming rules
=>bracket notation : used for keys that either follow or don’t follow identifier naming rules, can access any key
JavaScript provides built-in methods for working with objects:
2.Object.keys() – returns all object keys in an array
3.Object.values() – returns all object values in an array
4.Object.entries() – returns all object key value pairs in an array

Task 
78 & 79
Create a new file called objectTask and attempt the below questions:
my_arr= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]
Display:
1. KES
2. 560
3. Maths
4. In the object with the key currency, add another key “amount” with value 90
5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
     Hint: arrays can be reversed using reverse() functions
6. Change the name “John” to “Jane” . 

LOOPS
-A controlled structure used to perform tasks repetitively until a condition is met.
-It eliminates redundant work for the developer

Types of Loops
1.For Loop
	-used when you have a definitive starting point and ending point
	-it is made up of 3 parts:
	a) Initialization – the starting point
	b) Condition – condition that keeps the loop running ; if the condition is no longer met, 
	the loop terminates.
	c) Update – increment/decrement after each iteration
	syntax
	for(initialization: condition: update){
	//loop block
	}
2.While Loop
	-executes as long as the condition is true
	While( condition ){
	//block of code
	}
3.Do While
	-It executes at least once before checking for a condition
	Do{
	Console.log(“Start loop”)
	}while(x <= 10){
	Console.log(x)
	}

Nested Loops
-A loop within a loop
-For a single iteration of the outer loop, the inner/nested loop must loop to completion
*Forgot password*

Template literals
-A way of embedding variables inside strings -> the equivalent of an f-string
-Uses the backticks and the dollar sign($) and the curly brackets


Task on Loops
1.slide 82

Task on complex data structures
In the below complex data structure output the following:
  a)PostgreSQL
  b)Brand Strategy
  c)React


Task 11-14
On question 11, do not use the inbuilt datetime library
In JavaScript, NaN is short for "Not-a-Number".
The Number.isNaN() method returns true if the value is NaN, and the type is a Number.
A boolean. -true if the value is Number.NaN, otherwise false.


Escape	What it does	Example output
`\n`	Newline	`"Line1\nLine2"` → 2 lines
`\t`	Tab	`"A\tB"` → `A    B`
`\\`	Backslash	`"C:\\Users"` → `C:\Users`
`\"`	Double quote	`"He said \"hi\""` → `He said "hi"`
`\'`	Single quote	`'It\'s ok'` → `It's ok`
`\` ` | Backtick | `` `Hi \`there` `` → `Hi `there`
`\b`	Backspace	Deletes previous char

if (isNaN(val1) || isNaN(val2)) {
    alert("invalid character entered.\nTry again.");
}
That `\n` makes the alert show on 2 lines instead of 1 long line.

Most of the time you’ll only use `\n`, `\t`, `\\`, `\"`, and `\'`. The Unicode ones are for emojis and special symbols.


FUNCTIONS
->A block of reusable code meant to perform a specific task.

Why use functions
1.Code Reusability
2.Modularity – breaking down large codebase into smaller manageable pieces
3.Better Readability & Organization
4.Better Maintenance and Scalability

Types of Functions
1.Inbuilt functions-> comes with the programming language and have fixed purposes/uses
		e.g console.log(), typeof(), slice()
2.User-defined functions-> are created by the programmer(are custom functions for custom purposes)
			-> e.g. add_numbers()
Funtions in JS
->Functions in JS are defined using the ‘function’ keyword
->syntax:
Function function_name(){
	//function block
}
Function add_numbers(){
	//……
}

Parts of a function
1.Function definition -> defining / creating the function using the ‘function’ keyword and assigning a name
	->function keyword + function_name + possible parameters
	->function add_numbers() – non-parameterized function
	->function add_numbers(x,y) – parameterized function
2.Function body -> block inside the function meant to execute a specific code/task
	Function add_numbers(x,y){
		Return x + y. ---- function body
	}
3.Function call -> calling  a function by its name to execute its intended task
	Add_numbers()

Functions typically use the ‘return’ keyword
Return -> gives back the result/output of a function after execution and it also signifies the end of a function. (no code comes after return)

Variable scopes
->Determine where variables can be accessed from in a program
->We broadly have 2 scopes:
1.Global Scope – contains global variables (these variables can be accessed from anywhere in the program, whether global or local)
2.Local Scope – contains local variables (these variables are only accessible in their locally defined scope, they are not accessed globally)

How to make functions reusable
-To make functions reusable we let them take some parameters

Parameters – Placeholder variables/values used to make a function reusable
Arguments – the actual values passed in place of parameters when calling the function

NB: The number and order of parameter match the number and order of the arguments

Task
1.Question 2 & 10 -> redo this using functions
2.Create a new project called Tax_Calculator
	->create an index.html & tax.js files
	->do question 15-20 using functions in the tax.js file



break & continue
















 




-










	













