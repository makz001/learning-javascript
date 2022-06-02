// challenge >

// Create a function that looks through an array arr and returns 
// the first element in it that passes a 'truth test'. This 
// means that given an element x, the 'truth test' is passed 
// if func(x) is true. If no element passes the test, return undefined.

// code >

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        } 
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
