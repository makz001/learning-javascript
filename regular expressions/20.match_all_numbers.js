// Use the shorthand character class \d to count how many digits are 
// in movie titles. Written out numbers ("six" instead of 6) do not count.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

// /[0-9]/ == /\d/

console.log(`
    movieName:      ${movieName}
    nunRegex:       ${numRegex}

    result:         ${result}
`);
