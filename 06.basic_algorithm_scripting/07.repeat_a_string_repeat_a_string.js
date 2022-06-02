// challenge >
// Repeat a given string str (first argument) for num 
// times (second argument). Return an empty string 
// if num is not a positive number. For the purpose 
// of this challenge, do not use the built-in .repeat() method.

// code >
function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    }
    return repeatStringNumTimes(str, num - 1) + str;
}

console.log(repeatStringNumTimes("abc", 3));

// 3 -> 'abcabc' + 'abc'
// 2 -> 'abc' + 'abc'
// 1 -> '' + 'abc'
// 0 -> ''
