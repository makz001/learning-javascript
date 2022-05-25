// 1.Usernames can only use alpha-numeric characters.

// 2.The only numbers in the username have to be at the end. There can 
// be zero or more of them at the end. Username cannot start with 
// the number.

// 3.Username letters can be lowercase and uppercase.

// 4.Usernames have to be at least two characters long. 
// A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.

let users = [
    ["JACK", true],
    ["J", false],
    ["Jo", true],
    ["Oceans11", true],
    ["RegexGuru", true],
    ["007", false],
    ["9", false],
    ["A1", false],
    ["BadUs3rnam3", false],
    ["Z97", true],
    ["c57bT3", false],
    ["AB1", true],
    ["J%4", false],
];

// TODO: fix this
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

result = test();

console.log(`
    userCheck: ${userCheck}

    result:    ${result.pass}
    failAt:    ${result.failAt.length > 0 ? 
         result.failAt : 'no errors found'}
`);

function test() {
    let result = {
        pass: true,
        failAt: '',
    };

    for ( let i = 0; i < users.length; i++ ) {
        for ( let ii = 0; ii < users[i].length; ii++ ) {
            let str = users[i][ii];
            let bool = users[i][ii+1];

            if ( userCheck.test(str) === bool ) {
                break;
            } else {
                result.pass = false;
                result.failAt = str;
                return result;
            }
            break;
        }
    }
    return result;
}
