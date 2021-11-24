'use strict';

const maxStockProfit = function (pricesArr) {
	let profit = 0;
	for (let i = 0; i < pricesArr.length; i++) {
		for (let j = i; j < pricesArr.length; j++) {
			let delta = pricesArr[j] - pricesArr[i];
			profit = delta > profit ? delta : profit;
		}
	}
	return profit <= 0 ? -1 : profit;
};

const maxStockProfit2 = function (pricesArr) {
	let profit = -1;
	let buyPrice = 0;
	let sellPrice = 0;
	let changeBuyPrice = true;

	for (let i = 0; i < pricesArr.length; i++) {
		if (changeBuyPrice) buyPrice = pricesArr[i];
		sellPrice = pricesArr[i + 1];
		if (sellPrice < buyPrice) changeBuyPrice = true;
		else {
			let tempProfit = sellPrice - buyPrice;
			if (tempProfit > profit) profit = tempProfit;
			changeBuyPrice = false;
		}
	}
	return profit;
};

console.log(maxStockProfit([32, 46, 26, 128, 40, 48, 42]));
console.log(maxStockProfit2([32, 46, 26, 128, 40, 48, 42]));
