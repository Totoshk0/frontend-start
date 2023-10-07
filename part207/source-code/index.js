// index.js
import { readInt } from './infrastructure/inputFromTerminal.js'
import maximumTwoNumbersFullCondition from './if-else/ex01-if-else.js';
import maximumTwoNumbersIncompleteCondition from './if-else/ex02-if.js'

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

// demo01();
demo02();
