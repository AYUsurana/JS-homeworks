function Student(name, gender, age) {
    // мой код
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  //мой код
  this.subject = subjectName;
}

// мой код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  } 
    
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function() {
  let summ = this.marks.reduce((m, s) => {
   return  m + s;
  }, 0);

  let arith = summ/this.marks.length;
  return (arith);
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}