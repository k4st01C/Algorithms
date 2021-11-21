'use strict';

//O(n)**2
const twoSum = function (arr, sum) {
	const pairs = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			arr[i] + arr[j] === sum && pairs.push([arr[i], arr[j]]);
		}
	}
	return pairs;
};

console.log(twoSum([1, 2, 2, 3, 0, 1, 1], 4));

//O(n) with hashtable

const twoSum1 = function (arr, sum) {
	const pairs = [];
	const hashtable = [];
	for (let i = 0; i < arr.length; i++) {
		let counterPart = sum - arr[i];
		hashtable.includes(counterPart) && pairs.push([arr[i], counterPart]);
		hashtable.push(arr[i]);
	}
	return pairs;
};

console.log(twoSum1([1, 2, 2, 3, 1, 0, 1], 4));
