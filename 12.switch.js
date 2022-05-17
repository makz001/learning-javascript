// Selecting from many options with switch statements:

function caseInSwitch(val) {
    let answer = "";

    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    
    return answer;
}

console.log("       - Selecting from many options with switch statements:");
console.log("result -> caseInSwitch(1):", caseInSwitch(1));
console.log("---");


// Adding a default option in switch statements:

function switchOfStuff(val) {
    let answer = "";

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

console.log("       - Adding a default option in switch statements:");
console.log("result -> switchOfStuff('d'):", switchOfStuff("d"));
console.log("---");

// Multiple identical options in switch statements:

function sequentialSizes(val) {
    let answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    return answer;
}

console.log("       - Multiple identical options in switch statements:");
console.log("result -> sequentialSizes(1):", sequentialSizes(1));
console.log("---"); 

// Replacing if else chains with switch:

function chainToSwitch(val) {
    let answer = "";

    // if (val === "bob") {
    //     anwser = "Marley";
    // } else if (val === 42) {
    //     answer = "The Answer";
    // } else if (val === 1) {
    //     answer = "There is no #1";
    // } else if (val === 99) {
    //     answer = "Missed me by this much!";
    // } else if (val === 7) {
    //     answer = "Ate Nine";
    // }

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}

console.log("       - Replacing if else chains with switch:");
console.log("result -> chainToSwitch(7):", chainToSwitch(7));
console.log("---");
