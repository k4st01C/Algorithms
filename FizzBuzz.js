'use strict';
function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		let t = (i % 15 === 0 && 'fizzbuzz') || (i % 5 === 0 && 'buzz') || (i % 3 === 0 && 'fizz') || '';
		console.log(i, t);
	}
}

fizzBuzz(45);
