// Mutate an array declared with const:
console.log("       - Mutate an array declared with const:");

// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] 
// using various element assignments.

const s = [5, 7, 2];
console.log("s:", s);

function editInPlace() {
    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log("s:", s);

console.log("---");

// Prevent object mutation:
console.log("       - Prevent object mutation:");

// In this challenge you are going to use Object.freeze to prevent 
// mathematical constants from changing. You need to freeze the 
// MATH_CONSTANTS object so that no one is able to alter the value of 
// PI, add, or delete properties.

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log("PI:", PI);
