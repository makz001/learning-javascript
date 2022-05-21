// Use destructuring assignment to extract values from objects:
console.log("       - Use destructuring assignment to extract values from objects:");

// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables today and tomorrow the values of 
// today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

console.log("today:", today);
console.log("tomorrow:", tomorrow);

console.log("---");

// Use destructuring assignment to assign variables from objects:
console.log("       - Use destructuring assignment to assign variables from objects:");

// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables highToday and highTomorrow the 
// values of today and tomorrow from the HIGH_TEMPERATURES object.

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log("highToday:", highToday);
console.log("highTomorrow:", highTomorrow);

console.log("---");

// Use destructuring assignment to assing variables from nested objects:
console.log("       - Use destructuring assignment to assing variables from nested objects:");

// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables lowToday and highToday the values 
// of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low: lowToday, high: highToday2 } } = LOCAL_FORECAST;

console.log("lowToday:", lowToday);
console.log("highToday:", highToday2);

// Use destructuring assignment to assign variables from arrays:
console.log("       - Use destructuring assignment to assign variables from arrays:");

// Use destructuring assignment to swap the values of a and b so that a 
// receives the value stored in b, and b receives the value stored in a

let a = 8, b = 6;

console.log("a:", a);
console.log("b:", b);

console.log("   ---");

[b, a] = [a, b];

console.log("a:", a);
console.log("b:", b);

console.log("---");

// Use destructuring assingment with the rest paramenter to reassign array elements:
console.log("       - Use destructuring assingment with the rest paramenter to reassign array elements:");

// Use destructuring assignment with the rest parameter to perform an 
// effective Array.prototype.slice() so that arr is a sub-array of the 
// original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    
    // const arr = list; // Change this line
    const [a, b, ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);

console.log("source:", source);
console.log("");
console.log("removeFirstTwo(source):", arr);

console.log("---");

// Use destructuring assignment to pass an object as a function's parameter:
console.log("       - Use destructuring assignment to pass an object as a function's parameter:");

// Use destructuring assignment within the argument to the function half to 
// send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ( { max, min } ) => (max + min) / 2.0;

console.log("half(stats):", half(stats));
