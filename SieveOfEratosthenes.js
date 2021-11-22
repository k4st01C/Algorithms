'use strict';

const sieveOfEratosthenes = function (num) {
	let primes = [2];
	for (let i = 3; i <= num; i += 2) {
		if (primes.some(e => i % e === 0 && e < num ** (1 / 2))) continue;
		primes.push(i);
	}
	return primes;
};

const sieveOfEratosthenes2 = function (num) {
	const primes = Array(num).fill(true);
	primes[0] = true;
	primes[1] = true;

	for (let i = 2; i <= num ** (1 / 2); i++) {
		for (let j = 2; j * i <= num; j++) {
			primes[i * j] = false;
		}
	}
	return primes.map((e, i) => e && i).filter(e => e);
};

console.log(sieveOfEratosthenes(9999));
console.log(sieveOfEratosthenes2(9999));
