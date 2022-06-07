let farm = [
	{ name: 'cow', quantity: 3, },
	{ name: 'cat', quantity: 1, },
	{ name: 'dog', quantity: 2, },
	{ name: 'duck', quantity: 8, },
]
// find how much cows the farm has

let quantity = farm.find(animal => animal.name === 'cow').quantity;

console.log(quantity);
