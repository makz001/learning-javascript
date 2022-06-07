// challenge >
// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat() {
        console.log("nom nom nom");
    },
    describe() {
        console.log(`My name is ${this.name}`);
    },
};

let d = new Dog('tom');

d.eat();
d.describe();
