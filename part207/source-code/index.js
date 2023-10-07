// index.js
import { readInt } from './infrastructure/inputFromTerminal.js'
import maximumTwoNumbersFullCondition from './if-else/ex01-if-else.js';
import maximumTwoNumbersIncompleteCondition from './if-else/ex02-if.js'
import { maximumTwoNumbersTernaryOperator, isEvenOrOdd } from './ternary-operator/ex03-ternary-maximum.js'

const demo01 = (text = 'ex01-if-else.js ') => {
  console.log(`--- ${text}`);

  const a = readInt('a: ');
  const b = readInt('b: ');

  const max = maximumTwoNumbersFullCondition(a, b);

  console.log(`>> max(${a}, ${b}): ${max}\n`);
};

const demo02 = (text = 'ex01-if.js ') => {
  console.log(`--- ${text}`);

  const a = readInt('a: ');
  const b = readInt('b: ');

  const max = maximumTwoNumbersIncompleteCondition(a, b);

  console.log(`>> max(${a}, ${b}): ${max}\n`);
};

const demo03 = (text = 'ex03-ternary-maximum.js ') => {
  console.log(`--- ${text}`);

  const a = readInt('a: ');
  const b = readInt('b: ');

  const max = maximumTwoNumbersTernaryOperator(a, b);

  console.log(`>> max(${a}, ${b}): ${max}\n`);

  const isEvenOrOddA = isEvenOrOdd(a);
  console.log(`>> isEvenOrOdd(${a}): ${isEvenOrOddA}`);

  const isEvenOrOddB = isEvenOrOdd(b);
  console.log(`>> isEvenOrOdd(${b}): ${isEvenOrOddB}\n`);
};


// demo01();
// demo02();
demo03();
