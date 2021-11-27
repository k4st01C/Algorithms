'use strict';

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			arr[j] < arr[minIdx] && (minIdx = j);
		}
		if (i !== minIdx) swap(arr, minIdx, i);
	}
	return arr;
}

console.log(selectionSort([-10, 3, -12, 2, 10, 3, 1, -1, -5]));
