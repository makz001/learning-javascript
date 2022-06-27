
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is 
// not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

/* TODO: improve this */
const isPrime = n => {
    for (let i = 2; i <= n; i++) {
        if (!(i === n || n % i !== 0)) {
            return false;
        }
    }
    return true;
};

function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimes(977));

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

// primes : 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
