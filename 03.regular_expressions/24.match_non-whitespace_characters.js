// Change the regex countNonWhiteSpace to look for multiple 
// non-whitespace characters in a string.

// /[^ \r\t\f\n\v]/ = /\S/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace).length;

console.log(`
    sample:             ${sample}
    countNonWhiteSpace: ${countNonWhiteSpace}

    result:             ${result}
`);
