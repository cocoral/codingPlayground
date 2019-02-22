let ramda = require('ramda');

function fizzbuzz(num) {
	let array = ramda.range(1,21);

	let res = array.map(x => {
		if (x % 15 === 0) return 'fizzbuzz';
		else if (x % 3 === 0) return 'fizz';
		else if (x % 5 === 0) return 'buzz';
		else return x;
	});

	return res;
}

console.log(fizzbuzz(30));
