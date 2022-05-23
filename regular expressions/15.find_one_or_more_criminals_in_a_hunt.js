// Write a greedy regex that finds one or more criminals within a 
// group of other people. A criminal is represented by the capital 
// letter C.

let people = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";
let reCriminals = /C+/;

let criminals = people.match(reCriminals);

console.log(`
    people:          ${people} 
    reCriminals:     ${reCriminals}

    criminals count: ${criminals[0].length}
`);
