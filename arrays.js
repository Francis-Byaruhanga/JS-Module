// Arrays
// Used to store multiple values in a single variable. Can hold an 'array' of information. Lots of stuff

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "VW, BMW, Tesla, Toyota J5", null, ["Kenya", "Uganda"], {}];
             //0  1  2  3  4  5  6  7  8   9                            10      11
console.log(numbers[11]);

let myArray = [12, 13, 14, 15, 16, 17, 18, 19,];
myArray[2] = "four";
console.log(myArray);

let cars = new Array("Ford", "Toyota", "Bronco", "Jeep");
console.log(cars[2]);

let suvs = new Array("Purosangue", "Honda", "Range Rover");
suvs.push("Volvo", "BMW", "Tesla Cyber Truck", 3);
console.log(suvs);

console.log(cars.concat(suvs));

// Use of push and pop. It affects the last item in the array

let nations = ["USA", "France", "Germany", "France"];
nations.push("China");
nations.pop();
console.log(nations);

// Using splice. Allows you to remove an item from the start or the middle of the list.

let fruits = ["Bananas", "Grapes", ["Jackfruit", "Apples"], "Mangoes", "Watermelon", "Pineapple"]
fruits.splice(0, 2);
console.log(fruits);
// delete fruits[1],[0]; 

let cities = ["Kampala", "Nairobi", "London", "Zurich", "New York"];
cities.push("Moscow");
console.log(cities);
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);
cities.unshift("Casablanca");
console.log(cities);
delete cities[1];
console.log(cities);
cities.splice(3, 1);
console.log(cities);
cities.splice(0, 0, "Johannesburg");
console.log(cities);
cities.splice(1, 0, "Boston");
console.log(cities);

// Nested Arrays or Multi dimensional arrays. 

let hobbies = [["Swimming", 4], ["singing", 5], ["Basketball", 3], ["Football", 6]]
console.log(hobbies);
console.log(hobbies[1][0]) // Prints out first element in second sub array.
hobbies[2].pop(); // Removes last element in third sub array
console.log(hobbies)
hobbies[1].push(3); // Adds elements into the sub array
console.log(hobbies)
hobbies.splice(0,1) //Deletes first sub array
console.log(hobbies)







