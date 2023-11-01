const buildHTMLList = (coll) => {
  let result = '<ul>';

  for (const item of coll) {
    result += `<li>${item}</li>`;
  }

  return result + '</ul>';
}

// const data = [
//   'milk',
//   'butter',
//   'chocolate',
//   'bread',
//   'fish',
// ];

const arr = prompt('Пользователь - вводи данные',
  'milk,butter,chocolate,bread,fish')
  .split(',');

document.write(buildHTMLList(arr));
