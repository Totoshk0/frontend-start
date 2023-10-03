// Написать функцию, которая возвращает кол-во
// символов в строке
const stringLength = (text) => {
  return text.length;
}

// Написать функцию, которая удаляет пробелы
// в начале и конце строки
const removeSpace = (text) => {
  return text.trim();
}

// Написать функцию, которая превращает все символы
// в прописной вид [ЙЦУКЕ]
const textUpper = (text) => {
  const newValue = text.toUpperCase();
  return newValue;
}

const str = '                         это строка            ';
console.log(stringLength(str));

const newStr = removeSpace(str);
console.log(`>>${newStr}<<`);

const upperStr = textUpper(str);
console.log(`>>${upperStr}<<`);

// чтобы пробелов не было и всё прописными буквами
console.log('=====');
let text = removeSpace(str);
console.log(`removeSpace(text): >${text}<`);

text = textUpper(text);
console.log(`textUpper(text): >${text}<`);

console.log('=====');
console.log(textUpper(removeSpace(str))); // 333

console.log('=====');

text = str.trim().toUpperCase(); // 30
text = str.toUpperCase().trim(); // 30 + 10 + 10
