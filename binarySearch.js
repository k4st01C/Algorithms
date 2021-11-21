'use strict';

const binarySearch = function (numArr, key) {
	let idx = ~~(numArr.length / 2);
	if (numArr[idx] === key) return true;
	else if (numArr.length === 1) return false;
	else if (key > numArr[idx]) return binarySearch(numArr.slice(idx), key);
	else return binarySearch(numArr.slice(0, idx), key);
};

console.log(binarySearch([3, 5, 6, 7, 10, 16, 45, 56, 72, 82], 16));
