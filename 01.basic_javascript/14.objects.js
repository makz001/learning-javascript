// Build javascript objects

const myDog = {
    name: "tom",
    legs: 4,
    "tails": 1,
    "friends": ["humans",],
};

console.log("       - Build javascript objects:");
console.log("myDog:", myDog);
console.log("---");

// Accessing object properties with dot notation:

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

console.log("       - Accessing object properties with dot notation:");
console.log("testObj.hat:", hatValue);
console.log("testObj.shirt:", shirtValue);
console.log("---");

// Accessing object properties with bracket notation

const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

console.log("       - Accessing object properties with bracket notation");
console.log("testObj2[\"an entree\"]:", entreeValue);
console.log("testObj2[\"the drink\"]:", drinkValue);
console.log("---");

// Accessing object properties with variables:

const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

const playerNumber = 16;
const player = testObj3[playerNumber];

console.log("       - Accessing object properties with variables:");
console.log("testObj3[playerNumber]:", player);
console.log("---");

// Updating object properties:

const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
}


console.log("       - Updating object properties:");
console.log("- before:");
console.log("myDog2.name:", myDog2.name);

myDog2.name = "Happy Coder";
// myDog[name] = "Happy Coder";

console.log("- after:");
console.log("myDog2.name:", myDog2["name"]);

console.log("---");

// Add new properties to a javascript object:

const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
};

myDog3["bark"] = "woof";

console.log("       - Add new properties to a javascript object:");
console.log("myDog3[\"bark\"]:", myDog3["bark"]);
console.log("---");

// Delete properties from a javascript object:

const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof",
};

delete myDog4.tails;

console.log("       - Delete properties from a javascript object:");
console.log("myDog4:", myDog4);
console.log("---");

// Using objects for lookups:

function phoneticLookup(val) {
    // let result = "";

    // switch (val) {
    //     case "alpha":
    //         result = "Adams";
    //         break;
    //     case "bravo":
    //         result = "Boston";
    //         break;
    //     case "charlie":
    //         result = "Chicago";
    //         break;
    //     case "delta":
    //         result = "Denver";
    //         break;
    //     case "echo":
    //         result = "Easy";
    //         break;
    //     case "foxtrot":
    //         result = "Frank";
    // }

    const suitch = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };

    return suitch[val];
}

console.log("       - Using objects for lookups:");
console.log("phoneticLookup(\"charlie\"):", phoneticLookup("charlie"));
console.log("---");

// Testing objects for properties:

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found";
}

const testObject = {
    "name": "chanchito",
    "lastName": "feliz",
};

console.log("       - Testing objects for properties:");
console.log("checkObj(testObject, \"name\"):", checkObj(testObject, "name"));
console.log("checkObj(testObject, \"age\"):", checkObj(testObject, "age"));
console.log("---");

// Manipulating complex objects:

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP",
        ],
        "gold": true,
    },
    {
        "artist": "Alan Aztec",
        "title": "Hardbass Army",
        "release_year": 2021,
        "formats": [
            "CD",
            "8T",
            "LP",
        ],
    },
];

console.log("       - Manupulating complex objects:");
console.log("myMusic:", myMusic);
console.log("---");

// Accesing nested objects:

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs",
     },
    "outside": {
      "trunk": "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log("       - Accesing nested objects:");
console.log("myStorage.car.inside[\"glove box\"]:", gloveBoxContents);
console.log("---");

// Accesing nested arrays:

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion",
    ],
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch",
    ],
  },
];

const secondTree = myPlants[1].list[1];

console.log("       - Accesing nested arrays:");
console.log("myPlants[1].list[1]:", secondTree);
console.log("---");

// Record collection:

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    
    if (prop !== "tracks" && value.length !== 0) {
        records[id][prop] = value;
        return records;
    }

    if (prop === "tracks" && !records[id].hasOwnProperty(prop)) {
        records[id][prop] = [value];
        return records;
    }

    if (prop === "tracks" && value.length !== 0) {
        records[id][prop].push(value);
        return records;
    }

    if (prop.length !== 0 && value.length === 0) {
        delete records[id][prop];
        return records;
    }

}

console.log("       - Record collection:");
console.log(recordCollection);
console.log("   ---");
console.log("updateRecords(recordCollection, 5439, 'artist', 'ABBA'):", updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log("   ---");
console.log("updateRecords(recordCollection, 2468, 'tracks', 'Free'):", updateRecords(recordCollection, 2468, 'tracks', 'Free'));
console.log("   ---");
console.log("updateRecords(recordCollection, 2548, 'tracks', ''):", updateRecords(recordCollection, 2548, 'tracks', ''));
