const checkEvenOrOdd = (value) => {
  // BEGIN (write your solution here)

  // END
}

const calculateAverageScore = (score1, score2, score3) => {
  // BEGIN (write your solution here)

  // END
}

const calculateStudentGrade = (score) => {
  // BEGIN (write your solution here)

  // END
}

// Тестирование функции checkEvenOrOdd
let userNumber = 25;
let result = checkEvenOrOdd(userNumber);
console.log(`${userNumber}: ${result}`); // 25: false

userNumber = 2;
result = checkEvenOrOdd(userNumber);
console.log(`${userNumber}: ${result}`); // 2: true

// Тестирование функции calculateAverageScore
let exam1 = 85;
let exam2 = 72;
let exam3 = 60;
let resultMessage = calculateAverageScore(exam1, exam2, exam3);
console.log(`[${exam1},${exam2},${exam3}]: ${resultMessage}`); // [85,72,60]: true

exam1 = 65;
exam2 = 11;
exam3 = 56;
resultMessage = calculateAverageScore(exam1, exam2, exam3);
console.log(`[${exam1},${exam2},${exam3}]: ${resultMessage}`); // [65,11,56]: false

// Тестирование функции calculateStudentGrade
let studentScore = 85;
let studentGrade = calculateStudentGrade(studentScore);
console.log(`Оценка студента: ${studentGrade}`); // Оценка студента: Хорошо

studentScore = 28;
studentGrade = calculateStudentGrade(studentScore);
console.log(`Оценка студента: ${studentGrade}`); // Оценка студента: Неудовлетворительно
