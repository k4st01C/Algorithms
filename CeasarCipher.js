'use strict';

const ceasarCipher = function (str, num) {
	num = num < 0 ? (num % 26) + 26 : num;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let newStr = '';
	str
		.toLowerCase()
		.split('')
		.forEach(e => (newStr += alphabet.indexOf(e) === -1 ? e : alphabet[(alphabet.indexOf(e) + num) % 26]));
	return newStr;
};

console.log(ceasarCipher('zKzz--aa', -1));
