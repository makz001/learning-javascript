// Reuse javascript code using import

// Add the appropriate import statement that will allow the current 
// file to use the uppercaseString and lowercaseString functions 
// you exported in the previous lesson. These functions are in a 
// file called string_functions.js, which is in the same directory 
// as the current file.

import { uppercaseString, lowercaseString } from './11.1.module.js';

console.log(`uppercaseString("hello"): ${uppercaseString("hello")}`);
console.log(`lowercaseString("HELLO"): ${lowercaseString("HELLO")}`);
