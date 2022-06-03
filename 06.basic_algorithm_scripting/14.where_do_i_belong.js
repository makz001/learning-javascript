// challenge >

// Return the lowest index at which a value (second argument) should 
// be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because 
// it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once 
// the array has been sorted it will look like [3,5,20] and 19 is less 
// than 20 (index 2) and greater than 5 (index 1).

// code >

function getIndexToIns(arr, num) {
    arr = sort(arr);

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i+1 < arr.length) {
            if (num < arr[i] && i === 0) {
                result = i;
                return result;
            } else if (num < arr[i] && num > arr[i-1]) {
                result = i-1;
                return result;
            } else if (num > arr[i] && num <= arr[i+1]) {
                result = i+1;
                return result;
            } else if (num > arr[arr.length - 1]){
                result = arr.length;
                return result;
            }
        }
    }

    return result;

}

function sort(a) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < a.length; i++) {

            if (i+1 < a.length && a[i] > a[i+1]) {
                let aux = a[i];
                a[i] = a[i+1];
                a[i+1] = aux;
                sorted = false;
            }
        }
    }

    return a;
}

console.log(getIndexToIns([2, 5, 10], 15));
