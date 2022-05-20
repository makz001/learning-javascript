// Generate random fraction with javascript:
console.log("       - Generate random fraction with javascript:");

// Change randomFraction to return a random number instead of returning 0

function randomFraction() {
    return Math.random();
}

console.log("randomFraction():", randomFraction());

console.log("---");

// Generate random whole numbers with javascript:
console.log("       - Generate random whole numbers with javascript:");

// Use this technique to generate and return a random whole number between 
// 0 and 9.

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log("randomWholeNum():", randomWholeNum());

// Generate random whole numbers within a range:
console.log("       - Generate random whole numbers within a range:");

// Create a function called randomRange that takes a range myMin and myMax and 
// returns a random whole number that's greater than or equal to myMin, and 
// is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log("randomRange(1, 10):", randomRange(1, 10));
