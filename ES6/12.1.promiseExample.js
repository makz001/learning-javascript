
const success = false;

const promise = new Promise((resolve, reject) => {
    success ? 
        resolve("We got the data")
    :
        reject("Data not received");

});

promise.then( result => console.log(`result: ${result}`))
    .catch( error => console.log(`error: ${error}`));
