// escaping literal quotes in strings
let myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// quoting strings with single quotes
let doubleQuoteStr = "This is a string";
let singleQuoteStr = 'This is also a string';

let goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
let badStr = 'Finn responds, "let's go!"';

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
let myStr3 = "Hello, my name is ", myName, ", how are you";
