// Use the parseInt function:
console.log("       - Use the parseInt function:");

// Use parseInt() in the convertToInteger function so it converts the input 
// string str into an integer, and returns it.

function convertToInteger(str) {
    return parseInt(str);
}

console.log("convertToInteger(\"56\"):", convertToInteger("56"));
console.log("---");

// Use the parseInt function with a radix:
console.log("       - Use the parseInt function with a radix:");

// Use parseInt() in the convertToInteger function so it converts a binary 
// number to an integer and returns it.

function convertToInteger2(str) {
    return parseInt(str, 2);
}

console.log("convertToInteger2(\"10011\"):", convertToInteger2("10011"));
