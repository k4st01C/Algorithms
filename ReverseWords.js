'use strict';

const reverseWords = str =>
	str
		.split(' ')
		.map(e => {
			let newStr = '';
			for (let i = e.length - 1; i >= 0; i--) {
				newStr += e[i];
			}
			return newStr;
		})
		.join(' ');
console.log(reverseWords('bir iki üç'));
