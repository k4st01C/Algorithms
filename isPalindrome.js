'use strict';

const isPalindrome = function (str) {
	const strArr = str.toLowerCase().match(/[a-z]/g);
	return strArr.slice(0, ~~(strArr.length / 2)).every((e, i) => e === strArr[strArr.length - i - 1]);
};

console.log(isPalindrome('race car'));
