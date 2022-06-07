let arr = [1, 2, [3, 4], 5, [6]];

// get rid of all nested arrays

let result = arr.reduce( (a, i) => {
	return a.concat(i);
}, []);

console.log(result);
