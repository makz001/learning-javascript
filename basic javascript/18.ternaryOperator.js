// Use the conditional (ternary) operator:
console.log("       - Use the conditional (ternary) operator:");

// Use the conditional operator in the checkEqual function to check if two 
// numbers are equal or not. The function should return either the string 
// Equal or the string Not Equal.

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

console.log("checkEqual(1, 2):", checkEqual(1, 2));
console.log("checkEqual(2, 2):", checkEqual(2, 2));

// Use multiple conditional (ternary) operators:
console.log("       - Use multiple conditional (ternary) operators:");

// In the checkSign function, use multiple conditional operators - following 
// the recommended format used in findGreaterOrEqual - to check if a number is
// positive, negative or zero. The function should return positive, negative 
// or zero.

function checkSign(num) {
    return num > 0 ? "positive"
        : num === 0 ? "zero"
        : "negative";
}

console.log("checkSign(10):", checkSign(10));
console.log("checkSign(0):", checkSign(0));
console.log("checkSign(-3):", checkSign(-3));
