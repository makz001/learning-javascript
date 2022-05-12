// use conditional logic with if statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log("- use conditional logic with if statements -");
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
console.log("---");

// comparison with the equal operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(" - comparison with the equal operator -");
console.log(testEqual(10));
console.log(testEqual("12"));
console.log("---");

// 1 == 1       true
// 1 == 2       false
// 1 == '1'     true
// "3" == 3     true

// comparison with the strict equality operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(" - comparison with the strict equality operator -");
console.log(testStrict('7'));
console.log("---");

// comparison with the inequality operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(" - comparison with the inequality operator -");
console.log(testNotEqual(10));
console.log("---");

// 1 != 2       true
// 1 != "1"     false
// 1 != '1'     false
// 1 != true    false    
// 0 != false   false

// comparison with the inequality operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(" - comparison with the inequality operator -");
console.log(testStrictNotEqual(10));
console.log("---");

// 3 !==  3   false
// 3 !== '3'  true
// 4 !==  3   true

// comparison with the greater than operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

console.log("- comparison with the greater than operator -");
console.log(testGreaterThan(10));
console.log("---");

// 5   >  3   true
// 7   > '3'  true
// 2   >  3   false
// '1' >  9   false

// comparison with the greater than or equal to operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log("- comparison with the greater than or equal to operator -");
console.log(testGreaterOrEqual(10));
console.log("---");

// 6   >=  6   true
// 7   >= '3'  true
// 2   >=  3   false
// '7' >=  9   false

// comparison with the less than operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }
    
    return "55 or Over";
}

console.log("- comparison with the less than operator -");
console.log(testLessThan(10));
console.log("---");

// 2   < 5  true
// '3' < 7  true
// 5   < 5  false
// 3   < 2  false
// '8' < 4  false

// comparison with the less than or equal to operator

function testLessOrEqual(val) {
    if (val <= 22) {
        return "Smaller than or equal to 12";
    }

    if (val <= 24) {
        return "Smaller than or equal to 24";
    }
    return "More than 24";
}

console.log("- comparison with the less than or equal to operator -");
console.log(testLessOrEqual(10));
console.log("---");

// 4   <= 5  true
// '7' <= 7  true
// 5   <= 5  true
// 3   <= 2  false
// '8' <= 4  false

// comparison with the logical And(&&) operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log("- comparison with the logical and(&&) operator -");
console.log(testLogicalAnd(10));
console.log("---");

// comparison with the logical Or(||) operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log("- comparison with the logical Or(||) operator -");
console.log(testLogicalOr(15));
console.log("---");

// introducing Else statements

function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }

    return result;
}

console.log("- introducing Else statements -");
console.log(testElse(4));
console.log("---");

// introducing Else If statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log("- introducing Else If statements -");
console.log(testElseIf(7));
console.log("---");

// chaining if else statements

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log("- chaining if else statements -");
console.log(testSize(7));
console.log("---");

// golf example

const names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", 
    "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    let result = "";

    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}

console.log(" - golf example -");
console.log(golfScore(5, 4));
console.log("---");
