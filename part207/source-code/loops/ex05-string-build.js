const whileStringBuilder = (symbol, quantity) => {
  let result = '';
  let counter = 0;
  const char = symbol.length === 1 ? symbol : symbol[0];

  while (counter < quantity) {
    result = result + char;
    counter++;
  }

  return result;
}

const doWhileStringBuilder = (symbol, quantity) => {
  let result = '';
  let counter = 0;
  const char = symbol.length === 1 ? symbol : symbol[0];

  do {
    result = result + char;
    counter++;
  } while (counter < quantity);

  return result;
}

const forStringBuilder = (symbol, quantity) => {
  let result = '';
  let counter = 0;
  const char = symbol.length === 1 ? symbol : symbol[0];

  for (let counter = 0; counter < quantity; counter++) {
    result = result + char;
  }

  return result;
}

export { whileStringBuilder, doWhileStringBuilder, forStringBuilder };
