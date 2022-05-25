// Use capture groups in reRegex to match a string that 
// consists of only the same number repeated exactly 
// three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);
let result = repeatNum.match(reRegex);

console.log(`
    repeatNum: ${repeatNum}
    reRegex:   ${reRegex}

    result:    ${result}
`);
