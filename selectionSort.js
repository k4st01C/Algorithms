'use strict';

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
	let minIdx = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			minIdx = arr[j] < arr[minIdx] ? j : minIdx;
		}
		swap(arr, minIdx, i);
	}
	return arr;
}

console.log(selectionSort([-10, 3, -12, 2, 10, 3, 1, -1, -5]));
