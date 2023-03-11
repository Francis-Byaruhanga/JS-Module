// FOR LOOPS
// for
// for/in
// for/ of

// for (initialization; CSSConditionRule; increment) { 
    // loop body
// }

console.log("*******FOR LOOPS*******")

let student;

for(student = -2; student <=5; student++){
    console.log('value of student is: ' + student);
}

let oddNumbers
for(oddNumbers = 1; oddNumbers <=10; oddNumbers+=2){
    console.log(oddNumbers);
}

let fruits = [{'Apples':10}, {'Bananas':8}, {'Grapes':6}, {'Berries':4}]; // [] Square Brackets represent arrays
let fruit;
console.log("*******for in********")
for(fruit in fruits){
    console.log(fruits[fruit])
}

console.log("********for of********") 
for(fruit of fruits){
    console.log(fruit)
}

// While Loops
console.log("****While Loops********")
let counter=0;

while(counter <= 10){
    console.log('counter: ' + counter)
    counter++
}

//Do while loops
// There's an execution even when the condition is false
// Not normally used because of the loophole it may have

console.log("**** Do while loops****")
counter = 11;

do {
    console.log('New Result: ' + counter);
    --counter;
} while (counter >= -1)

console.log(counter)




