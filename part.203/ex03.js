// Написать функцию, которая удаляет пробелы в
// начале и конце строки

const noSpace = (line) => {
  return line.trim();
}

let str1 = '         Маша ела кашу             ';
console.log(str1);
str1 = noSpace(str1);
console.log(`>>${str1}<<`);