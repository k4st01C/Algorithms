'use strict';

const merge = function (arr1, arr2) {
	let resArr = [];
	while (arr1.length && arr2.length) {
		resArr.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
	}
	resArr = resArr.concat(arr1.length ? arr1 : arr2);
	return resArr;
};
const mergeSort = function (arr) {
	if (arr.length < 2) return arr;
	const midIdx = ~~(arr.length / 2);
	const firstHalf = arr.slice(0, midIdx);
	const secondHalf = arr.slice(midIdx);
	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

// console.log(merge([1, 2, 4, 5, 9], [2, 7, 13]));

console.log(mergeSort([32, 1, 78, 4, 3, 7, 56]));
