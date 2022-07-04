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


function checkCashRegister(price, cash, cid) {
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

    let coins2 = coins.map(el => [el[0], Math.ceil(el[1] * 100)]);
    let diff = cash * 100 - price * 100;
    let startIndex;
    for (let i = 0; i < cid.length; i++) {
        if (coins2[i][1] > diff) {
            startIndex = i;
            break;
        }
    }

    coins2 = coins2.slice(0, startIndex).reverse();

    let change = cid.slice(0, startIndex).map(el => [el[0], Math.ceil(el[1] * 100)]).reverse().reduce( (acc, el, ix) => {
        let sum = 0;
        while (sum < el[1]) {
            if (diff - coins2[ix][1] >= 0) {
                diff -= coins2[ix][1];
                sum += coins2[ix][1];
            } else {
                break;
            }
        }
        if (sum > 0) {
            return [...acc, [el[0], sum / 100]];
        } else {
            return acc;
        }
    }, []);
    
    let moneyInDrawer = cid.reduce( (acc, el) => {
        let x = change.filter(elem => el[0] === elem[0]);
        if (x[0] != undefined) {
            return acc + el[1] - x[0][1];
        } 
        return acc + el[1];
    }, 0);

    if (moneyInDrawer > 0 && diff === 0) {
        return {status: "OPEN", change}
    }

    if (moneyInDrawer === 0 && diff === 0) {
        return {status: "CLOSED", change: cid};
    }

    if (moneyInDrawer < diff) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
// should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); 
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.


// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
