const getMaxValue = (x, y) => x > y ? x : y;

const value1 = 4;
const value2 = 10;

let result = getMaxValue(value1, value2);
console.log(`result: ${result}`);

result = getMaxValue(9, 28);
console.log(`result: ${result}`);
