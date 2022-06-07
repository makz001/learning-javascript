// challenge > 

// Write a function that splits an array (first argument) into groups 
// the length of size (second argument) and returns them as a 
// two-dimensional array.

// code >

function chunkArrayInGroups(arr, size) {
	let a = []; // array
	let s = 0; // start
	let c = size; // count

	for (let i = 0; i < arr.length; i++) {
		if (i === c-1) {
			a.push(arr.slice(s, c));
			s = c;
			c += size;
		} else if (i === arr.length - 1) {
			a.push(arr.slice(s, i+1));
		}
	}

	return a;
}

console.log('result:', chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log('result:', chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); 
