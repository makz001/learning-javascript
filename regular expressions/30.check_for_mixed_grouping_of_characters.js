// Fix the regex so that it checks for the names of Franklin 
// Roosevelt or Eleanor Roosevelt in a case sensitive manner 
// and it should make concessions for middle names.

// Then fix the code so that the regex that you have created 
// is checked against myString and either true or false is 
// returned depending on whether the regex matches.

let myString = "Franklin Roosevelt";
let myRegex = /(Franklin|Eleanor)[\s\w\.]*Roosevelt/;
let result = myRegex.test(myString);

console.log(`
    myString: ${myString}
    myRegex:  ${myRegex}

    result:   ${result}
`);
