// A function is a reusable block of code.

// function funcName(param1, param2){
    //statements
// }

// Example 1

 function add(){
    console.log(2+3);
 }
 add(); // Function invocation

 // Example 2
 function add2(a, b){
    console.log(a+b);
    return (a+b)
 }
// add2(2,4);
console.log(add2(7,4));

// Function definition
function say() {
   console.log("How are you?");
}
say();

function state() {
   console.log("Come in");
}
state();


function Add(a, b, c, d) {
   return a + b + c + d
}
Add()
console.log(Add(40, 67, 28, 80));

function add3(left, right) { // left & right are parameters here
   let sum = left + right;  // left & right are arguments here
   return sum;
}

console.log(add3(3, 6, 5)); // 5 is ignored, prints 9
console.log(add3(3)); // second argument missing; prints NaN

// Local and Global variables
// Local variable - has a limited scope (inside a function in which it is defined)
