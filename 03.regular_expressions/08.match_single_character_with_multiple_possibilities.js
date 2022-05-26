// Use a character class with vowels (a, e, i, o, u) in your regex 
// vowelRegex to find all the vowels in the string quoteSample.

// Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(`
    quoteSample: ${quoteSample}
    vowelRegex:  ${vowelRegex}

    result:      ${result}
`);

