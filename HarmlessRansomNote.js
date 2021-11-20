'use strict';

const harmlessRansomNote = function (noteText, magazineText) {
	const magazineObj = magazineText.split(' ').reduce((a, e) => {
		a[e] ? a[e]++ : (a[e] = 1);
		return a;
	}, {});
	const noteObj = noteText.split(' ').reduce((a, e) => {
		a[e] ? a[e]++ : (a[e] = 1);
		return a;
	}, {});
	return Object.keys(noteObj).every(e => magazineObj[e] >= noteObj[e]);
};

console.log(
	harmlessRansomNote(
		'this is a secret note for you from a secret admirer',
		'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited',
	),
);
