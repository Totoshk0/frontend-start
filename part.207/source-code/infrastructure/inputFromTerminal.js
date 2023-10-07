import readlineSync from 'readline-sync';

const readString = (message) => {
  const text = readlineSync.question(`>> ${message}`);
  return text;
};

const readFloat = (message) => {
  const value = parseFloat(readlineSync.question(`>> ${message}`));
  return value;
};

const readInt = (message) => {
  const value = parseFloat(readlineSync.question(`>> ${message}`));
  return value;
};

export { readString, readFloat, readInt };
