// challenge >

// Return the provided string with the first letter of each word 
// capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize 
// connecting words like the and of.

function titleCase(str) {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += " " + str[i+1].toUpperCase();
            i++;
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
