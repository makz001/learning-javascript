// Use the shorthand character class \W to count the number of 
// non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// /[^A-Za-z0-9_]/ = /\W/

console.log(`
    quoteSample:      ${quoteSample}
    nonAlphabetRegex: ${nonAlphabetRegex}

    result:           ${result}
`);
