function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	let sum = this.marks.reduce((total, mark) => total + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

// Пример:

let newStudent = new Student('Диана', 'женский', 20);
newStudent.setSubject('Алгебра');
console.log(newStudent.getAverage());
newStudent.addMarks(4, 5, 4, 5);
console.log(newStudent.getAverage());
console.log(newStudent);

let newStudent2 = new Student('Евгений', 'Мужской', 23);
newStudent2.setSubject('Геометрия');
newStudent2.exclude('Плохая учёба');
console.log(newStudent2);

let newStudent3 = new Student('Екатерина', 'женский', 21);
newStudent3.setSubject('История');
console.log(newStudent3.getAverage());
newStudent3.addMarks(3, 4, 5);
console.log(newStudent3.getAverage());
console.log(newStudent3);

newStudent3.exclude('невыполнение требований');
console.log(newStudent3);