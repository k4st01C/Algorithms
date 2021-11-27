'use strict';

const bubbleSort = function (arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			arr[j] > arr[j + 1] && ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]);
		}
	}
	return arr;
};

const bubbleSort2 = function (arr) {
	let swapFlag;
	for (let i = arr.length; i > 0; i--) {
		swapFlag = true;
		for (let j = 0; j < i - 1; j++) {
			arr[j] > arr[j + 1] && ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]);
			swapFlag = false;
		}
		if (swapFlag) break;
	}
	return arr;
};

console.log(bubbleSort2([12, 11, -10, 9, 8, 6, 5, 4, 2, -1]));
