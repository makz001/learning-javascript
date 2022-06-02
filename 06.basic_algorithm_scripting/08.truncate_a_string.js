// challenge > 

// Truncate a string (first argument) if it is longer than the 
// given maximum string length (second argument). Return the 
// truncated string with a ... ending.

// code > 

function truncateString(str, num) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str[i];

        if (i === num - 1 && num !== str.length) {
            newStr += '...';
            return newStr;
        }
    }
    return newStr;
}

function truncateString_(str, num) {
    return str.length <= num ?
        str:
        str.slice(0, num) + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
"A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString_("A-tisket a-tasket A green and yellow basket", 
"A-tisket a-tasket A green and yellow basket".length));
