'use strict';

const fibonacci = function (position) {
	if (position < 3) return 1;
	const arr = [1, 1];
	(function recurse() {
		if (position === arr.length) return;
		const aL = arr.length;
		arr.push(arr[aL - 1] + arr[aL - 2]);
		recurse();
	})();
	return arr[position - 1];
};

const fibonacci2 = function (position) {
	if (position < 3) return 1;
	return fibonacci(position - 1) + fibonacci(position - 2);
};

const fibonacci3 = function (position) {
	const arr = [1, 1];
	for (let i = 0; i < position; i++) {
		const aL = arr.length;
		arr.push(arr[aL - 1] + arr[aL - 2]);
	}
	return arr[position - 1];
};

const fibonacci4 = function (position, cache = [1, 1]) {
	const aL = cache.length;
	if (position === aL || position < 3) return cache[position - 1];
	cache.push(cache[aL - 1] + cache[aL - 2]);
	return fibonacci4(position, cache);
};

console.log(fibonacci(9));
console.log(fibonacci2(9));
console.log(fibonacci3(9));
console.log(fibonacci4(9));
