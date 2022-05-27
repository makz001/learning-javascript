// title> add items to an array with push() and unshift():

// challenge> We have defined a function, mixedNumbers, 
// which we are passing an array as an argument. 
// Modify the function by using push() and unshift() 
// to add 'I', 2, 'three' to the beginning of the 
// array and 7, 'VIII', 9 to the end so that the 
// returned array contains representations of 
// the numbers 1-9 in order.

// code>
function mixedNumbers(arr) {
    // Only change code below this line
    let toUnshift = ['I', 2, 'three'];
    let toPush = [7, 'VIII', 9];

    arr.unshift(...toUnshift);
    arr.push(...toPush);

    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
