// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

/* TODO: do this with String.prototype.charCodeAt */
function fearNotLetter(str) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let missingLetter;
    let start = alphabet.indexOf(str.charAt(0));

    for (let i = start; i < str.length + start ; i++) {
        if (str.charAt(i - start) !== alphabet[i]) {
            missingLetter = alphabet[i];
            break;
        }
    }
    return missingLetter;
}

console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
