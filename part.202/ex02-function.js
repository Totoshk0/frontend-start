function divBefore(firstArg, secondArg) {
  const result = (firstArg / secondArg);
  console.log(`${firstArg} / ${secondArg} = ${result}`);
}

// function divAfter(firstArg, secondArg) {
//   const result = (firstArg / secondArg);
//   const outputStr = `${firstArg} / ${secondArg} = ${result}`;
//   return outputStr;
// }

const divAfter = (firstArg, secondArg) => {
  const result = (firstArg / secondArg);
  const outputStr = `${firstArg} / ${secondArg} = ${result}`;
  return outputStr;
}

let salary = 0;

const addSalary = (value) => {
  ч
  salary += value;
}


console.log(`salary = ${salary}`);
addSalary(100);
console.log(`salary = ${salary}`);
addSalary(100);
console.log(`salary = ${salary}`);
addSalary(400);
console.log(`salary = ${salary}`);

// div(11, 42);
// div(1, 4);
// div(1, 41);

console.log('Before');
const strBefore = divBefore(11, 42);
console.log(strBefore);


console.log('After');
const strAfter = divAfter(11, 42);
console.log(strAfter);

console.log('After 2');
const strAfter2 = divAfter(11, 42) + '!!!';
console.log(strAfter2);
