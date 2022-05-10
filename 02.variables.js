/* 

data types:

- undefined,
- null,
- boolean,
- string,
- symbol,
- bigint,
- number,
- object,

*/

// this is a variable
var myName;

// storing a value in a variable with the assignment operator "="
myVariable = 5;

// initializing variables with the assignment operator "="
var c = 8;

// assigning the value of one variable to another
var a = 7;
var b = a;

// assigning a string literal to a variable
myName = "makz";

// variables initial value is undefined
var undefined; 

// if you do a mathematical operation on an undefined
// your result will be NaN wich means "Not a Number".
var NaN = undefined + 1;

// if you concatenate a string with a undefined varible,
// you will get a string of undefined
undefined + " Hello"; // 'undefined Hello'

// variables in javascript are case sensitive
// someVariable != SomeVariable && someVariable != SOMEVARIABLE
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// unlike "var" when you declare a variable with "let",
// that variable can only be declared once
let camper = "James";
let camper = "David"; // <- error

// constant
const FAV_PET = "Cats";
