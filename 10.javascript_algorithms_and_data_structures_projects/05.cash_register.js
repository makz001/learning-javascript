// Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
// first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as 
// the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	    |   Amount
// ___________________________________________
//                      |
// Penny	            |   $0.01 (PENNY)
// Nickel	            |   $0.05 (NICKEL)
// Dime	                |   $0.1 (DIME)
// Quarter	            |   $0.25 (QUARTER)
// Dollar	            |   $1 (ONE)
// Five Dollars	        |   $5 (FIVE)
// Ten Dollars	        |   $10 (TEN)
// Twenty Dollars	    |   $20 (TWENTY)
// One-hundred Dollars	|   $100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const coins = [
   ['PENNY', 0.01],
   ['NICKEL', 0.05],
   ['DIME', 0.1],
   ['QUARTER', 0.25],
   ['ONE', 1],
   ['FIVE', 5],
   ['TEN', 10],
   ['TWENTY', 20],
   ['ONE HUNDRED', 100],
];

const add = (a, b) => {
    let cza = a.toString().split('.').slice(1).length;
    let czb = b.toString().split('.').slice(1).length;

    let xa = cza === 0 ? 1 : cza === 1 ? 10 : 100;
    let xb = czb === 0 ? 1 : czb === 1 ? 10 : 100;

    return ((a * xa) + (b * xb)) / (xa)
};
const sub = (a, b) => ((a * 100) - (b * 100)) / 100;
const div = (a, b) => ((a * 100) / (b * 100)) / 100;

function checkCashRegister(price, cash, cid) {
    let diff = cash - price;
    let change = { status: '', change: [] };
    let coinIndex;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i][1] > diff) {
            coinIndex = i - 1;
            break;
        }
    }

    let lastCoin;
    for (let i = coinIndex; i >= 0; i--) {
        if (cid[i][1] !== 0) {
            let limit = cid[i][1] / coins[i][1];
            let sum = 0;

            while (limit > 0 && diff >= coins[i][1]) {
                diff = sub(diff, coins[i][1]);
                limit--;
                sum = add(sum, coins[i][1]);
                console.log('diff', diff, 'coins', coins[i], 'limit', limit);
            }
            if (sum !== 0) {
            change['change'].push([cid[i][0], sum]);
            }
            lastCoin = cid[i][1];
        }
    }
    if (diff === 0) {
        change['status'] = "OPEN";
    } else if (diff !== 0 && diff > lastCoin) {
        change['status'] = "INSUFFICIENT_FUNDS";
        change['change'] = [];
    } else if (diff === 0 && lastCoin === 0) {
        change['status'] = "CLOSED";
        change['change'] = [];
    }

    console.log(change);
    return change;
}

function ccr(price, cash, cid) {
    let diff = cash - price;
    let a = cid.reduce( (acc, el, ix) => {
        console.log('d:', diff, 'e:', el[1], 'c:', coins[ix][1]);
        if (diff >= coins[ix][1]) {
            return [...acc, [el]];
        } else {
            return acc;
        }
    }, []);
    console.log(a);
}
ccr(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); 

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); 
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
