// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(`
    extractStr:   ${extractStr}
    codingRegex:  ${codingRegex}

    result:       ${result}
    `);
