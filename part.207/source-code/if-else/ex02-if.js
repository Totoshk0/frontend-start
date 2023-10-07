const maximumTwoNumbersIncompleteCondition = (a, b) => {
  let max = a;

  if (b > max) {
    max = b;
  }

  return max;
}

export default maximumTwoNumbersIncompleteCondition;
