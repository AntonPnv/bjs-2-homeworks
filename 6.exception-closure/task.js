"use strict";
// Задача № 1

function parseCount(value) {
	const parseValue = Number.parseFloat(value);
	if (Number.isNaN(parseValue)) {
		throw new Error('Невалидное значение');
	}
	return parseValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

// Пример использования
const useСase1 = '31';
const useСase2 = '1000';
const useСase3 = 'string';

const result1 = validateCount(useСase1);
const result2 = validateCount(useСase2);
const result3 = validateCount(useСase3);

console.log(result1);
console.log(result2);
console.log(result3);

// Задача № 2

class Triangle {
	constructor(sideOne, sideTwo, sideThree) {
		if (sideOne + sideTwo < sideThree ||
			sideOne + sideThree < sideTwo ||
			sideTwo + sideThree < sideOne) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.sideOne = sideOne;
		this.sideTwo = sideTwo;
		this.sideThree = sideThree;
	}

	get perimeter() {
		return this.sideOne + this.sideTwo + this.sideThree;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree));
		return parseFloat(area.toFixed(3));
	}
}

function getTriangle(sideOne, sideTwo, sideThree) {
	try {
		return new Triangle(sideOne, sideTwo, sideThree);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}

// Пример использования
const triangle1 = getTriangle(3, 4, 5);

console.log(triangle1.perimeter);
console.log(triangle1.area);

const triangle2 = getTriangle(2, 2, 5);

console.log(triangle2.perimeter);
console.log(triangle2.area);