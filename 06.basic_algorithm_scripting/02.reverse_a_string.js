// challenge >
// Reverse the provided string.

// You may need to turn the string into an 
// array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i > -1; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("hello"));
