// Write concise object literal declarations using object property shorthand:
console.log("       - Write concise object literal declarations using object property shorthand:");

// Use object property shorthand with object literals to create and return an 
// object with name, age and gender properties.

const createPerson = (name, age, gender) => {
    // return {
    //     name: name,
    //     age: age,
    //     gender: gender
    // };
    return { name, age, gender };
};

const createPerson2 = (name, age, gender) =>  ({ name, age, gender }) ;

console.log(createPerson("makz", 23, "m"));
console.log(createPerson2("makz", 23, "m"));

