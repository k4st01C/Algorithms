'use strict';

const { count } = require('console');

function nativeStringSearch(string, query) {
	let counter = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === query[0]) {
			for (let j = 0; j < query.length; j++) {
				if (string[i + j] !== query[j]) break;
				if (j === query.length - 1) counter++;
			}
		}
	}
	return counter;
}

console.log(nativeStringSearch('kkem', 'kema'));
