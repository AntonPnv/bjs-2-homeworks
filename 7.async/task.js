"use strict";

// Задача № 1
class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.find(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		const today = new Date();
		let hours = today.getHours();
		let minutes = today.getMinutes();

		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		} else {
			this.intervalId = setInterval(() => {
				const currentTime = this.getCurrentFormattedTime();
				this.alarmCollection.forEach(alarm => {
					if (alarm.time === currentTime && alarm.canCall) {
						alarm.canCall = false;
						alarm.callback();
					}
				});
			}, 1000);
		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

// Пример использования

const alarmClock = new AlarmClock();

alarmClock.addClock('01:10', () => console.log('Вася! Подъем пора на пары!'));
alarmClock.addClock('01:12', () => {
	console.log('Вася! Вставай, а то опоздаешь на пары!');
	alarmClock.removeClock('01:13');
});
alarmClock.addClock("01:14", () => console.log('Вставай, а то опоздаешь на пары!'));
alarmClock.start();