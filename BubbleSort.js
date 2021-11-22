'use strict';

const bubbleSort = function (arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			arr[j] > arr[j + 1] && ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]);
		}
	}
	return arr;
};

console.log(bubbleSort([12, 11, -10, 9, 8, 6, 5, 4, 2, -1]));
