// title> remove items using splice():

// challenge> We've initialized an array arr. 
// Use splice() to remove elements from arr, 
// so that it only contains elements that sum 
// to the value of 10.

// code>
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let arr = [5, 3, 4, 5, 5];
// Only change code below this line

// TODO: fix this
// only works with the first arr and a range of 3
// it should work with any array passing as an argument
// numbers from 1 to array.length as range
// let arr = [5, 2, 5, 5]
// sum10(arr, 1) -> don't work as expected
// sum10(arr, 2) -> [5, 5]
// break;
// sum10(arr, 3) -> don't work as expected
// sum10(arr, 4) -> don't work as expected
// range:4 === arr.length; end

function sum10(arr, range) {
    console.log('range', range); // debug
    let lastElement = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i + range !== arr.length) {
            for (let ii = i; ii < i+range; ii++) {
                sum += arr[ii];
                lastElement = ii;
            }
            if (sum === 10) {
                arr.splice(lastElement + 1, arr.length - lastElement + 1);
                while (arr.length > range) {
                    arr.shift();
                }
                break;
            } else {
                sum = 0;
            }
        }
    }
    
    return sum;
}

sum10(arr, 2);
sum10(arr, 3);
// for (let i = 1; i < arr.length; i++) {
//     if (sum10(arr, i) === 10) {
//         break;
//     }
// }

// Only change code above this line
console.log(arr);
