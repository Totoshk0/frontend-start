// index.js
import { readInt } from './infrastructure/inputFromTerminal.js'
import maximumTwoNumbersFullCondition from './if-else/ex01-if-else.js';
import maximumTwoNumbersIncompleteCondition from './if-else/ex02-if.js'
import { maximumTwoNumbersTernaryOperator, isEvenOrOdd } from './ternary-operator/ex03-ternary-maximum.js'
import { fullSwitch, getTimeOfYear } from './switch-operator/ex04-switch.js'

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

const demo04 = (text = 'ex04-switch.js') => {
  console.log(`--- ${text}`);

  const value = readInt('value: ');
  const output = fullSwitch(value);

  console.log(`>> fullSwitch(${value}): ${output}\n`);

  const month = readInt('month: ');
  const season = getTimeOfYear(month);
  console.log(`>> getTimeOfYear(${month}): ${season}\n`);
};

// demo01();
// demo02();
// demo03();
demo04();
