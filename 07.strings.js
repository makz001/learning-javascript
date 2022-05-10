// escaping literal quotes in strings
let myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// quoting strings with single quotes
let doubleQuoteStr = "This is a string";
let singleQuoteStr = 'This is also a string';

let goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
let badStr = 'Finn responds, "let's go!"'; // <- error

// escape sequences in strings

/*
 * \' single quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b word boundary
 * \f form feed
 */

let myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; 

/*
 * myStr:
 * FirstLine
 *     \SecondLine
 * ThirdLine
 */

// concatenating strings with plus operator
let helloWorld = "Hello, " + "World";

// concatenating strings with the plus equals operator
let ourStr = "I come first. ";
ourStr += "I come second.";

// constructing strings with variables
let myName = "makz";
let myStr3 = "Hello, my name is "+ myName+ ", how are you";

// appending variables to strings
const someAdjective = "Awesome!";
let myStr4 = "Learning to code is ";
myStr4 += someAdjective;

// find the length of a string
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// use bracket notation to find the first character in a string
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

firstLetterOfLastName = lastName2[0];

// understand string immutability
let myStr5 = "Bob";
myStr5[0] = "J"; // <- don't work

myStr5 = "Job";

// use bracket notation to find the Nth character in a string
const lastName3 = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// use bracket notation to find the last character in a string
const lastName4 = "Lovelace";
const lastLetterOfLastName = lastName4[lastName4.length - 1];

// use bracket notation to find the Nth-to-Last character in a string
const lastName5 = "Lovelace";
const secondToLastLetterOfLastName = lastName5[lastName5.length - 2];
