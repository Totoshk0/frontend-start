const transformString = (text) => {
  return text
    .split('')
    .map(x => `\0${x}\0` + '\0')
    .join('');
}

export { transformString };
