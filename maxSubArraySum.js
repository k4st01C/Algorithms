//sliding window pattern
'use strict';

function subArraySum(arr, num) {
	let max = 0;
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
	let tempMax = max;
	for (let i = 0; i < arr.length - num; i++) {
		tempMax = tempMax - arr[i] + arr[i + num];
		console.log(tempMax, max);
		max = max > tempMax ? max : tempMax;
	}
	return max;
}

console.log(subArraySum([12, 23, 31, 12, 24, 32, 50], 1));
