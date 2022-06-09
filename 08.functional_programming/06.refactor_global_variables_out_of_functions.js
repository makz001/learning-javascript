// challenge >
// Rewrite the code so the global array bookList is not changed inside either 
// function. The add function should add the given bookName to the end of the 
// array passed to it and return a new array (list). The remove function 
// should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters 
// should be added before the bookName parameter.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bList, bookName) {

    let bL = bList.slice();

    bL.push(bookName);

    return bL;

    // Change code above this line
}

// updated add function:

const add2 = (array, bookName) => [...array, bookName];

// Change code below this line
function remove(bList, bookName) {

    let bL = bList.slice();

    const book_index = bL.indexOf(bookName);
    if (book_index >= 0) {

        bL.splice(book_index, 1);
        return bL;

        // Change code above this line
    }
}

// updated remove function:

const remove2 = (array, bookName) => array.filter( i => i !== bookName);

console.log('add:\n', add(bookList, 'A Brief History of Time'));
console.log('remove:\n', remove(bookList, 'On The Electrodynamics of Moving Bodies'));
console.log('remove add:\n', remove(add(bookList, 'A Brief History of Time'), 'A Brief History of Time'));

console.log('bookList:\n', bookList);

console.log('add2:\n', add2(bookList, 'A Brief History of Time'));
console.log('remove2:\n', remove2(bookList, 'On The Electrodynamics of Moving Bodies'));
console.log('remove2 add2:\n', remove2(add2(bookList, 'A Brief History of Time'), 'A Brief History of Time'));

console.log('bookList:\n', bookList);
