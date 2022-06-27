// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    return arr.reduce((a, el) => Array.isArray(el) ? a.concat(...el) : a.concat(el), []);
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
