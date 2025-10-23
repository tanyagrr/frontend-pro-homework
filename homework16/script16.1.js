function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = [];

    this.getAge = function() {
        const age = new Date().getFullYear() - this.birthYear;
        return age;
    }

    this.getAverageGrade = function() {
        const average = this.grades.reduce((acc, el) => acc + el, 0) / this.grades.length;
        return average;
    }

    this.present = function(index) {
        if (index > 25 || index < 1) {
            console.log("Помилка");
        } else {
            this.attendance[index - 1] = true;
        }
    }
    
    this.absent = function(index) {
        if (index > 25 || index < 1) {
            console.log("Помилка");
        } else {
            this.attendance[index - 1] = false;
        }
    }

    this.summary = function() {
        const averageAttendance = this.attendance.reduce((acc, el) => acc + (el ? 1 : 0), 0) / 25;
        if (averageAttendance >= 0.9 && this.getAverageGrade() >= 90) {
            return "Молодець!";
        } else if (averageAttendance >= 0.9 || this.getAverageGrade() >= 90) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Микола", "Іванов", 2005, [90, 75, 100, 95]);
console.log(student1.getAge());
console.log(student1.getAverageGrade());
student1.present(1);
student1.present(2);
student1.present(3);
student1.present(5);
student1.present(6);
student1.present(7);
student1.present(8);
student1.present(9);
student1.present(10);
student1.present(11);
student1.present(12);
student1.present(13);
student1.present(14);
student1.present(15);
student1.present(16);
student1.present(17);
student1.present(18);
student1.present(19);
student1.present(20);
student1.present(21);
student1.present(22);
student1.present(23);
student1.present(24);
student1.present(25);
console.log(student1.summary());
student1.present(26);

const student2 = new Student("Анастасія", "Рядченко", 2006, [95, 75, 80, 80]);
console.log(student2.getAge());
console.log(student2.getAverageGrade());
student2.present(1);
student2.present(2);
student2.present(3);
student2.present(5);
student2.present(6);
student2.present(7);
student2.present(8);
student2.present(9);
student2.present(10);
student2.present(11);
student2.present(12);
student2.present(13);
student2.present(14);
student2.present(15);
student2.present(16);
student2.present(17);
student2.present(18);
student2.present(19);
student2.present(20);
student2.present(21);
student2.present(22);
student2.present(23);
student2.present(24);
student2.present(25);
console.log(student2.summary());

const student3 = new Student("Софія", "Куліш", 2005, [70, 75, 80, 90]);
console.log(student3.getAge());
console.log(student3.getAverageGrade());
student3.present(1);
student3.present(2);
student3.present(3);
student3.present(5);
student3.present(6);
student3.present(7);
student3.present(8);
student3.present(9);
student3.present(10);
student3.present(11);
student3.present(12);
student3.present(15);
student3.present(16);
student3.present(17);
student3.present(22);
student3.present(23);
student3.present(24);
student3.present(25);
console.log(student3.summary());