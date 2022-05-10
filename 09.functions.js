// write reusable javascript with functions
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction(); // "Hi World"

// passing values to functions with arguments
function functionWithArgs(n, nn) {
    console.log(n + nn);
}

functionWithArgs(1, 1); // 2

// return a value from a function with return
function timesFive(n) {
    return n * 5;
}

// global scope and functions
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output); // myGlobal: 10 oopsGlobal: 5
}

// local scope and functions
function myLocalScope() {
    const myVar = "Hi";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar); // myVar is not defined <- error

// global vs. local scope in functions
const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}

myOutfit();

// understanding undefined value returned from a function
let sum = 0;

function addSum(num) {
    sum = sum + num;
}

let returnValue = addSum(3); // returnValue == undefined
console.log(sum); // 3

// assignment with a returned value
function sum1(n, nn) {
    return n + nn;
}

let ourSum = sum1(5, 12); 
console.log(ourSum); // 17
