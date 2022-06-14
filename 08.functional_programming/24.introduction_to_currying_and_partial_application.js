// Fill in the body of the add function so it uses currying to add 
// parameters x, y, and z.

function add(x) {
    // Only change code below this line

    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }

    // Only change code above this line
}

let result = add(10)(20)(30);

console.log(result);

const add2 = x => y => z => x + y + z;

console.log(add2(10)(10)(10));

// ---

function partial(x, y, z) {
    return x + y + z;
}

const add3 = partial.bind(this, 10, 20);
console.log(add3(10));
