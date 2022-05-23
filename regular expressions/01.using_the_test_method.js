// Apply the regex myRegex on the string myString using the .test() method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

console.log(`
    myString: ${myString}
    myRegex:  ${myRegex}

    result:   ${result}
`);
