// store multiple values in one variable using javascript arrays
const myArray = ["string", 1];

// nested array
const nestedArray = [["string", 1], ["string", "string", 2]];

// access array data with indexes
const myArray2 = [50, 60, 70];
const myData = myArray2[0]; // 50

// modify array data with indexes
const myArray3 = [18, 64, 99];
myArray3[0] = 45; // [45, 64, 99]

// access multi-dimensional arrays with indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const myData2 = arr[2][1];

// manipulate arrays with push()
const arr1 = [1, 2, 3];
arr1.push(4); // arr1 == [1, 2, 3, 4]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); // arr2 == ["Stimpson", "J", "cat", ["happy", "joy"]]

// manipulate arrays with pop()
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]

// manipulate arrays with shift()
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift(); // removedFromOurArray == "Stimpson"

// manipulate arrays with unshift()
const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift(); // ourArray2 == ["J", "cat"]
ourArray2.unshift("Happy"); // ourArray2 == ["Happy", "J", "cat"]

// shopping list
const myList = [
    ["Milk", 2], //lt
    ["Bread", 1], //kg
    ["Hamburgers", 5],
    ["Ketchup", 1],
    ["tomato", 2],
];
