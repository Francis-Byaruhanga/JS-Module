// if statement
// if...else statement
// if...else...if statement

//syntax:
// if (expression) {
//     statements to be executed if expression is true
// } else{
//     statements to be executed if expression is false
// }

// if(){}   its an empty full statement

let age = 22;
if (age > 18){
    console.log("You are eligible to get a driving licence")
} else if(age == 18){
    console.log("You just became eligible to get a driving license")
} else {
    console.log("You are not eligible to get a driving licence")
}

// Ternary operator
// condition ? printed statement if condition is true : print statement if condition is false

// Example 2

let individual = "employee"

if (individual < "employee"){
    console.log("Access granted")
} else {
    console.log("Access Denied!")
}


// Switch case.

let startRating = 7;
switch(startRating){
    case 1:
        console.log('very bad');
        break;
    case 2:
        console.log('bad');
        break;
    case 3:
        console.log('Average');
        break;
    case 4:
        console.log('Good')
        break;
    case 5:
        console.log('Excellent');
        break;
    default:
        console.log('Enter a valid integer between 1 and 5');
}
