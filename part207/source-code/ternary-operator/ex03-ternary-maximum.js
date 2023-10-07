const maximumTwoNumbersTernaryOperator = (a, b) => {
  let max = (a > b) ? a : b;
  return max;
}

const isEvenOrOdd = (value) => {
  let result = value % 2 === 0 ? 'чётное число' : 'нечётное число';
  return result;
}

export { maximumTwoNumbersTernaryOperator, isEvenOrOdd };
