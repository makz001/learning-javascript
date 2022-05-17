// Returning boolean values from functions:

function isLess(a, b) {
    // if (a < b) {
    //     return true;
    // } else {
    //     return false;
    // }

    return a < b;
}

console.log("       - Returning boolean values from functions:");
console.log("result -> isLess(10, 15):", isLess(10, 15));
console.log("---");

// Return early pattern for functions:

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log("       - Return early pattern for functions:");
console.log("result -> abTest(2, 2):", abTest(2, 2));
console.log("---");


// Counting cards:

let count = 0;

function cc(card) {
    if ( card >= 2 && card <= 6 ) {
        count++
    }

    switch (card) {
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if ( count > 0 ) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

}

console.log("       - Counting cards:");
console.log("result -> cc(2):", cc(2)); // 1 bet
console.log("result -> cc(3):", cc(3)); // 2 bet
console.log("result -> cc(7):", cc(7)); // 2 bet
console.log("result -> cc('K'):", cc('K')); // 1 bet
console.log("result -> cc('A'):", cc('A')); // 0 hold
console.log("---");
