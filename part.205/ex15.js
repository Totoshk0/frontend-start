const getMaxValue = (x, y) => {
  let max;

  if (x > y) {
    max = x;
  } else {
    max = y;
  }
  return max;
}

const value1 = 4;
const value2 = 10;

let result = getMaxValue(value1, value2);
console.log(`result: ${result}`);

result = getMaxValue(9, 28);
console.log(`result: ${result}`);
