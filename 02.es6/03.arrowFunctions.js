// Use arrow functions to write concise anonymous functions:
console.log("       - Use arrow functions to write concise anonymous functions:");

// Rewrite the function assigned to the variable magic which returns a 
// new Date() to use arrow function syntax. Also, make sure nothing is 
// defined using the keyword var.

//  var magic = function() {
//      return new Date();
//  };

const magic = () => {
    return new Date();
}

const magic2 = () => new Date();

console.log("magic()", magic());
console.log("magic2()", magic2());

console.log("---");

// Write arrow functions with parameters:
console.log("       - Write arrow functions with parameters:");

// Rewrite the myConcat function which appends contents of arr2 to arr1 so 
// that the function uses arrow function syntax.

// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// };

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log("myConcat([1, 2], [3, 4, 5]):", myConcat([1, 2], [3, 4, 5]));

console.log("---");

// Set default parameters for your functions:
console.log("       - Set default parameters for your functions:");

// Modify the function increment by adding default parameters so that it 
// will add 1 to number if value is not specified.
  
const increment = (number, value = 1) => number + value;

console.log("increment(1):", increment(1)); // -> 2
console.log("increment(1, 2):", increment(1, 2)); // -> 3

console.log("---");

// Use the rest parameter with fuction parameters:
console.log("       - Use the rest parameter with fuction parameters:");

// Modify the function sum using the rest parameter in such a way that the 
// function sum is able to take any number of arguments and return their sum.

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log("sum(1, 3, 4):", sum(1, 3, 4));
