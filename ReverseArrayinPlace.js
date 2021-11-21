'use strict';

const reverseArrayInPlace = function (arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
	}
	return arr;
};

console.log(reverseArrayInPlace([1, 2, 5, 3]));
