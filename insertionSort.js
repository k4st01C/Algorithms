'use strict';

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let pointer = i;
		if (arr[pointer] >= arr[pointer - 1]) continue;
		while (arr[pointer] < arr[pointer - 1]) {
			swap(arr, pointer - 1, pointer);
			--pointer;
		}
	}
	return arr;
}

console.log(insertionSort([1, 1, -1, 2, -11, 3, 2, 5, 12, -4]));
