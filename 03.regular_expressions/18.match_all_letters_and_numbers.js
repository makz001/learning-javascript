// Use the shorthand character class \w to count the number of 
// alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// /[A-Za-z0-9_]+/ = /\w+/

console.log(`
    quoteSample:      ${quoteSample}
    alphabetRegexV2:  ${alphabetRegexV2}

    result:           ${result}
`);
