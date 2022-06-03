// challenge >

    // Remove all falsy values from an array.

    // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

    // Hint: Try converting each value to a Boolean.

// code >

function bouncer(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            a.push(arr[i]);
        }
    }
    return a;
}

console.log(bouncer([7, "ate", "", false, 9]));
