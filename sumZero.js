'use strict';

function sumZero(arr) {
	const aL = arr.length - 1;
	let p1 = 0;
	let p2 = aL;
	while (arr[p1] + arr[p2] !== 0) {
		if (p1 === p2) return false;
		else arr[p1] + arr[p2] < 0 ? ++p1 : --p2;
	}
	return [arr[p1], arr[p2]];
}

let arr = [-2, -1, 1, 2];

console.log(sumZero(arr));
