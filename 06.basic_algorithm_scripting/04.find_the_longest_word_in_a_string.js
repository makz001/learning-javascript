// challenge >

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let words = wordsArr(str);

    let longest = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }

    return longest;
}

function wordsArr(str) {
    let words = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i];
        }
        if (str[i] === " " ||i === str.length - 1) {
            words.push(word);
            word = '';
        }
    }
    return words;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
