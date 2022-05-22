// Use class syntax to define a constructor function:
console.log("       - Use class syntax to define a constructor function:");

// Use the class keyword and write a constructor to create the Vegetable 
// class.

// The Vegetable class allows you to create a vegetable object with a 
// property name that gets passed to the constructor.

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(`carrot.name: ${carrot.name}`); // Should display 'carrot'
