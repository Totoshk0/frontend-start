const firstName = 'John';
//                 0123
let symbol = firstName[1];
console.log(symbol); // o
const lastName = 'Doe';
//                012
symbol = lastName[5];
console.log(symbol); // undefined

let age = 321;
console.log(age[1]); // undefined
console.log(age % 10); // 1
console.log(Math.floor(age / 10) % 10);// 2
console.log(Math.floor(age / 100)); // 3