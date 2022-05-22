// Create a javascript promise:

// Create a new promise called makeServerRequest. Pass in a function 
// with resolve and reject parameters to the constructor.

const makeServerRequest = new Promise((resolve, reject) => {

});

// Complete a promise with resolve and reject:

// Make the promise handle success and failure. If responseFromServer 
// is true, call the resolve method to successfully complete the 
// promise. Pass resolve a string with the value We got the data. 
// If responseFromServer is false, use the reject method instead 
// and pass it the string: Data not received.

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
});

// Handle a fulfilled promise with then:

// Add the then method to your promise. Use result as the parameter 
// of its callback function and log result to the console.

const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest3.then(result => {
    console.log(`result: ${result}`);
});

// Handle a rejected promise with catch:

// Add the catch method to your promise. Use error as the parameter 
// of its callback function and log error to the console.

const makeServerRequest4 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
});

makeServerRequest4.then(result => {
    console.log(result);
}).catch(error => {
    console.log(`error: ${error}`);
});
