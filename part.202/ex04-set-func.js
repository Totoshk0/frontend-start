// function stringLength(text) {
//   return text.length;
// }
// const stringLength = (text) => { return text.length; }
// const stringLength = (text) => text.length;
const stringLength = text => text.length;

let str = 'Какой-то текст';
console.log(str);

let count = stringLength(str);
console.log(`${typeof str} -> ${typeof count}`);

console.log(stringLength(str));


// function foo11() {
// }
const foo11 = () => { }

// function foo12() {
//   console.log('Hello');
// }
// const foo12 = () => { console.log('Hello'); }
const foo12 = () => console.log('Hello');

// function foo21(text) {
//   console.log(text);
// }
// const foo21 = (text) => { console.log(text); }
const foo21 = text => console.log(text);

// function foo22(text, path) {
//   // fileWrite(path, text);
// }

const foo22 = (text, path) => {
  // fileWrite(path, text);
}


// function foo31() {
//   return 'hello';
// }

// const foo31 = () => { return 'hello'; }
const foo31 = () => 'hello';
// console.log(foo31());

// function foo32() {
//   return x ** 2 + 1;
// }
// const foo32 = () => {
//   let x = 123;
//   return x ** 2 + 1;
// }
const foo32 = () => {
  let x = 123;
  return x ** 2 + 1;
}

// function foo41(a, b, c) {
//   return 123;
// }

// const foo41 = (a, b, c) => {
//   return 123;
// }
const foo41 = (a, b, c) => 123;

// function f(x) {
//   return x ** 2 + 1;
// }

// const f = (x) => {
//   return x ** 2 + 1;
// }

const f = (x) => x ** 2 + 1;

console.log(f(12));