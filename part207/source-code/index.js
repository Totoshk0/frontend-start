// index.js
import { readInt } from './infrastructure/inputFromTerminal.js'
import maximumTwoNumbersFullCondition from './if-else/ex01-if-else.js';

const demo01 = (text = 'ex01-if-else.js ') => {
  console.log(`--- ${text}`);

  const a = readInt('a: ');
  const b = readInt('b: ');

  const max = maximumTwoNumbersFullCondition(a, b);

  console.log(`>> max(${a}, ${b}): ${max}\n`);
};

demo01();
