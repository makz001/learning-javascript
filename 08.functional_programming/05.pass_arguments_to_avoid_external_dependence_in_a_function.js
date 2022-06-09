// challenge >

//Let's update the incrementer function to clearly declare its dependencies.

// Write the incrementer function so it takes an argument, and then returns a 
// result after increasing the value by one.

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(value) {
    return value + 1;

    // Only change code above this line
}

console.log('variable before the function call:', fixedValue);
console.log('the return value:', incrementer(fixedValue));
console.log('variable after the function call:', fixedValue);
