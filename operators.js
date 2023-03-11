// Arithmetic operators 
x = 6;
y = 4;

// Addition 
let result1 = x + y
console.log(result1)

// Substraction
let result2 = x - y
console.log(result2)

// multiplication 
let result3 = x * y
console.log(result3)

//division
let result4 = x / y
console.log(result4)

//Modulus - Reminder of Division
let result5 = x % y
console.log(result5)

console.log(-17 % 5)

//Exponential X to power of Y.
let result6 = x ** y
console.log(result6)

console.log(2 ** 2)

// ++ Increment
// Post increment 
let z = 10;
let result7 = 2 + z++
console.log(result7)

//Pre Increment
let w = 10;
let result8 = 2 + ++w
console.log(result8)

//-- Decrement
//Post Decrement
let m =10;
let result9 = 2 + m--
console.log(result9)

//Pre Decrement
let n = 10;
let result10 = 2 + --n
console.log(result10)

// Assignment Operators 
// = Assign
// += Add and assign
// -= Sub and assign
// *= multiply and assign
// /= divide and assign
// %= modulus and assign
// **= Exponential and assign

// In programming, the order of precedence: "Parenthes, Exponents, Multiplication/Division, Addition/Subtraction.) PEMDAS"
let e = 10; 
e = 5 + 10;
console.log(e)

// += Add and assign
let f = 10;
f += 5 // Same as f= f + 5
console.log(f)

// -= Sub and Assign
let g = 10;
g -= 5
console.log(g)

// *= multiply and assign
let h = 15;
h *= 5
console.log(h)

// /= divide and assign
let i = 15;
i /= 5
console.log(i)

// %= modulus and assign
let k = 15;
k %= 5
console.log(k)

// **= Exponential and assign
let l = 15;
l **= 5
console.log(l)

// ******* Comparison Operators *******
// == equal to
// === equal value and equal type
// != not equal to
// !== not equal value and type
// > greater than
// < lesser than
// >= greater than or equal to
// <= lesser than or equal to
// ? ternary operator

let o = 10;
let q = 15;
let p = '15';

// == equal to
console.log(0 == p)
console.log(q == p)

// === equal value and equal type
console.log(q === p)

// != not equal to
console.log(o != q)
console.log(q != p)

// !== not equal value and type
console.log(q !== p)

// > greater than
console.log(q > o)

// < lesser than
console.log(0 < q)

// >= greater than or equal to
console.log(o >= q)

// <= lesser than or equal to
console.log( o <= q)

// ? ternary operator
/*
Ternary operator: like if-then else
takes 3 arguements
conditions ? value : value if false
*/

let r = 20;
let s = 15;

let result = r > s ? "I love you": "I don't love you"
console.log(result)

// ********Logical Operators******** 
// && , - logical AND | True if both are true
// || - logical OR | True if both conditions are true
// ! logical NOT| Will return true if the condition is false and vice versa

let t = true;
let u = false;

console.log("Logical And: Result " + t && u)
console.log("Logical Or : Result " + t || u)
console.log("Logical Not: Result " + !t)
console.log(!u)

// ******Type operators******
// typeOf
// Returns the type of a variable
// We can use the typeOf operator to find the data of a JavaScript variable

let firstName = "Ruhanns";
let num = 50;

console.log(typeof firstName) // Returns 'string'
console.log(typeof num) // Returns 'number'
console.log(typeof true) // Returns 'Boolean'
console.log(typeof NaN); // Returns 'Number'
console.log(typeof [1,2,3,4]); //Returns 'object'
console.log(typeof {name: 'Jack', age: 22}); //Returns object
console.log(typeof new Date()); // Returns 'object'
console.log(typeof null); // Returns 'object'
console.log(typeof function (){}); // Returns 'function'
console.log(typeof myClass); //Returns 'undefined'

// Instance of 
// Returns true if an object is an instance of an object type
// The instanceof operator returns a boolean value if an object is an instance of a particular class
// Instance of means "a result of" or "because of"

let lastName = new String('Doe'); // More explanation in OOP
let num1 = new Number(123);
console.log(lastName instanceof String);
console.log(num1 instanceof Number);

// Read about Bitwise operators.















