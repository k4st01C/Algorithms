'use strict';

const getMean = function (arr) {
	return arr.reduce((p, n) => p + n) / arr.length;
};

const getMedian = function (arr) {
	arr.sort((a, b) => a - b);
	const idx = ~~(arr.length / 2);
	return arr.length % 2 === 0 ? (arr[idx] + arr[idx - 1]) / 2 : arr[idx];
};

const getMode = function (arr) {
	const obj = arr.reduce((a, e) => {
		a[e] ? a[e]++ : (a[e] = 1);
		return a;
	}, {});
	const maxN = Math.max(...Object.values(obj));
	if (maxN === 1) return [];
	return Object.entries(obj).reduce((a, e) => {
		e[1] === maxN && a.push(+e[0]);
		return a;
	}, []);
};

const meanMedianMode = function (arr) {
	return {
		median: getMedian(arr),
		mean: getMean(arr),
		mode: getMode(arr),
	};
};

console.log(meanMedianMode([1, 2, 2, 3, 3, 3]));
