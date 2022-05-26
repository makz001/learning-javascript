// Using the regex starRegex, find and extract both Twinkle words from 
// the string twinkleStar.

// Note:
// You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex);

console.log(`
    twinkleStar: ${twinkleStar}
    starRegex:   ${starRegex}

    result:      ${result}
    `);
