// Write a function that takes two or more arrays and returns a new array of unique values in 
// the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original 
// order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should 
// not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
    
    // get rid off all repeat numbers
    
    /* TODO: improve this with 
     * 1.(Array.prototype.flat / Array.prototype.indexOf) 
     * 2.(Array.prototype.flat / Set)
     *
     * */
    return Array.from(arguments).reduce((a, i) => a.concat(i), [])
    .reduce((a, i, j, arr) => !a.includes(i) ? a.concat(i) : a , []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
