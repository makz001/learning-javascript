// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the 
// same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
    let args = Array.from(arguments).slice(1);
    return arr.filter(i => args.every(j => j !== i)); // - [ ] TODO: do the Array.prototype.every part with Array.prototype.includes
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1]
