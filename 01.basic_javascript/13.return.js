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

function cc2(card) {
    switch (true) {
        case card === 2 || card === 3 || card === 4 || card == 5 || card == 6:
            count++;
            break;
        case card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    }
    
    return count + " Hold";
}

console.log("       - Counting cards:");
console.log("result -> cc2(2):", cc2(2)); // 1 bet
console.log("result -> cc2(3):", cc2(3)); // 2 bet
console.log("result -> cc2(7):", cc2(7)); // 2 bet
console.log("result -> cc2('K'):", cc2('K')); // 1 bet
console.log("result -> cc2('A'):", cc2('A')); // 0 hold
console.log("---");
