// challenge >
// The eat method is repeated in both Cat and Bear. Edit the code in the 
// spirit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,

    eat() {
        console.log("nom nom nom");
    },
};

let animal = new Animal();
let bear = new Bear('oso');
let cat = new Cat('michi');

animal.eat();
