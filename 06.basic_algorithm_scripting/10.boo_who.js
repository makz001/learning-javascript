// challenge >

// Check if a value is classified as a boolean primitive.
// Return true or false.

// Boolean primitives are true and false.

// code >

function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }

    return false;
}

function booWho_(bool) {
    return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho_(null));
