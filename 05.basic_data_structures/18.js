// iterate through the keys of object with a for...in statement:

// We've defined a function countOnline which accepts 
// one argument (a users object). Use a for...in statement 
// within this function to loop through the users 
// object passed into the function and return the 
// number of users whose online property is set to 
// true. An example of a users object which could 
// be passed to countOnline is shown below. Each 
// user will have an online property with either 
// a true or false value.

// {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let u in usersObj) {
        if (usersObj[u].online) {
            count++;
        };
    }
    return count;
    // Only change code above this line
}

console.log(countOnline(users));
