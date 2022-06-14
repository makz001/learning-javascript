// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// ---

// Translate the provided string to Pig Latin. Input strings are guaranteed to be 
// English words in all lowercase.

function translatePigLatin(str) {
    let vowel = ['a','e','i','o','u'];
    let consonant = /^[bcdfghjklmnpqrstvwyz]+/;

    let firstLetter = str[0];
    if (vowel.includes(firstLetter)) {
        return str.concat('way');
    } else {
        let consonantCount = str.match(consonant)[0].length;
        return str.slice(consonantCount).concat(str.slice(0, consonantCount), 'ay');
    }

}

console.log(translatePigLatin("apple"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
