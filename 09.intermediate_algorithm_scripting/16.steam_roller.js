// Flatten a nested array. You must account for varying levels of nesting.

/* TODO: improve this */
function steamrollArray(arr) {
    arr = arr.reduce((acc, i) => {
        if (Array.isArray(i)) {
            return acc.concat(...i);
        }
        return acc.concat(i);
    }, []);

    if (arr.some(i => Array.isArray(i))) {
        arr = [...steamrollArray(arr)];
    }
    return arr;
}

// steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
