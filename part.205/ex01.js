// const printText1 = (text) => text;
const printText1 = (text) => {
  return text;
}

const printText2 = (text = '') => text;
// const printText2 = (text = '') => {
//   return text;
// }

let result = printText1();
console.log(typeof result); // undefined -> undefined

result = printText1('text 001');
console.log(typeof result); // string -> 'text 001'

result = printText2();
console.log(typeof result); // string -> ''

result = printText2('text 002');
console.log(typeof result); // string -> 'text 002'
