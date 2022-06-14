// Use the sort method in the nonMutatingSort function to sort the elements 
// of an array in ascending order. The function should return a new array, 
// and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line

    // slice version:
    // return arr.slice()
    //     .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);


    // concat version:
    return arr.concat()
        .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

    // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));

