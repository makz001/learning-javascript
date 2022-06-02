// challenge >

// Return an array consisting of the largest number from each 
// provided sub-array. For simplicity, the provided array 
// will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple 
// for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let largestNumberArr = [];

    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let ii = 1; ii < arr[i].length; ii++) {
            if (arr[i][ii] > largest) {
                largest = arr[i][ii];
            }
        }
        largestNumberArr.push(largest);
    }

    return largestNumberArr;
}

function largestOfFour_(arr) {
    let largestNumberArr = [];

    for (let i = 0; i < arr.length; i++) {
        largestNumberArr.push(Math.max(...arr[i]));
    }
    
    return largestNumberArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
console.log(largestOfFour_([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour_([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
