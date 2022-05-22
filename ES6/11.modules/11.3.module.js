// Use * to import everything from a file:

// The code in this file requires the contents of the file: 
// string_functions.js, that is in the same directory as the current 
// file. Use the import * as syntax to import everything from the 
// file into an object called stringFunctions.

import * as stringFunctions from './11.1.module.js';

console.log(`stringFunctions.uppercaseString("hello"): ${stringFunctions.uppercaseString("hello")}`);
console.log(`stringFunctions.lowercaseString("WORLD!"): ${stringFunctions.lowercaseString("WORLD!")}`);
