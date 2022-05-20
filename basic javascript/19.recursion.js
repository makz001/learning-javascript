// Use Recursion to create a countdown:
console.log("       - Use Recursion to create a countdown:");

// We have defined a function called countdown with one parameter (n). The 
// function should use recursion to return an array containing the integers 
// n through 1 based on the n parameter. If the function is called with a 
// number less than 1, the function should return an empty array. For example,
// calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
// Your function must use recursion by calling itself and must not use loops
// of any kind.

function countdown(n){ // -> [1...n]
    // if (n < 1) {
    //     return [];
    // }

    // const arr = countdown(n - 1);
    // arr.push(n); ???
    // return arr;
    return n < 1 ? [] : [n, ...countdown(n - 1)]
}
// n = 5 -> [5, 4, 3, 2, 1]
// n = 4 -> [5, 4, 3, 2]
// n = 3 -> [5, 4, 3]
// n = 2 -> [5, 4]
// n = 1 -> [5]
// n = 0 -> []

console.log("countdown(5):", countdown(5));
console.log("---");

// Use recursion to create a range of numbers:
console.log("       - Use recursion to create a range of numbers:");

// We have defined a function named rangeOfNumbers with two parameters. 
// The function should return an array of integers which begins with a 
// number represented by the startNum parameter and ends with a number 
// represented by the endNum parameter. The starting number will always 
// be less than or equal to the ending number. Your function must use 
// recursion by calling itself and not use loops of any kind. It should 
// also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
    // if (startNum > endNum) {
    //     return [];
    // }

    // const arr = rangeOfNumbers(startNum, endNum - 1);
    // arr.push(endNum);
    // return arr;

    return startNum > endNum ? []
        : [...rangeOfNumbers(startNum, endNum - 1), endNum];
};

console.log("rangeOfNumbers(1, 3):", rangeOfNumbers(1, 3));
console.log("rangeOfNumbers(6, 9):", rangeOfNumbers(6, 9));
console.log("rangeOfNumbers(4, 4):", rangeOfNumbers(4, 4));

// 4 startNum = 1 endNum = 0 -> []
//      1 > 0 ? [] : [...rangeOfNumbers(1, 0), 0]
//      1 > 0 : []
// 3 startNum = 1 endNum = 1 -> [1]
//      1 > 1 ? [] : [...rangeOfNumbers(1, 1), 1]
//      1 === 1 : [, 1]
// 2 startNum = 1 endNum = 2 -> [1, 2]
//      1 > 2 ? [] : [...rangeOfNumbers(1, 2), 2]
//      1 < 2 : [1, 2]
// 1 startNum = 1 endNum = 3 -> [1, 2, 3]
//      1 > 3 ? [] : [...rangeOfNumbers(1, 3), 3]
//      1 < 3 : [1, 2, 3]
