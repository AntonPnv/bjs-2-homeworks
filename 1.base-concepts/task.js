'use strict'

function solveEquation(a, b, c) {
	let arr = [];

	const disc = b ** 2 - 4 * a * c;
	if (disc < 0) {
		return arr;
	} else if (disc === 0) {
		arr.push(-b / (2 * a));
		return arr;
	} else if (disc > 0) {
		arr.push((-b + Math.sqrt(disc)) / (2 * a));
		arr.push((-b - Math.sqrt(disc)) / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (
		typeof percent !== 'number' ||
		typeof contribution !== 'number' ||
		typeof amount !== 'number' ||
		typeof countMonths !== 'number'
	) {
		percent = parseFloat(percent);
		contribution = parseFloat(contribution);
		amount = parseFloat(amount);
		countMonths = parseFloat(countMonths);

		if (
			isNaN(percent) ||
			isNaN(contribution) ||
			isNaN(amount) ||
			isNaN(countMonths)
		) {
			return false;
		}
	}

	percent = percent / 100;
	const credit = amount - contribution;

	const monthPercent = percent / 12;
	const pow = Math.pow(1 + monthPercent, countMonths);
	const monthPayment = credit * (monthPercent + (monthPercent / (pow - 1)));
	const totalPayment = monthPayment * countMonths;

	return +totalPayment.toFixed(2);
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52