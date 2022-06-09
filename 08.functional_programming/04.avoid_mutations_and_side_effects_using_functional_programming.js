// challenge >
// Fill in the code for the function incrementer so it returns the value of 
// the global variable 'fixedValue' increased by one.

// The global variable
let fixedValue = 4;

function incrementer() {
    // Only change code below this line

    return fixedValue + 1;

    // Only change code above this line
}

console.log('variable before the function call:', fixedValue);
console.log('function return:', incrementer(fixedValue));
console.log('variable after the function call:', fixedValue);
