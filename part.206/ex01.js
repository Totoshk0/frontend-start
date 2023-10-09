const pointInRectangle = (x, y, x1, y1, x2, y2) => {
  let result = x >= x1 && x <= x2 && y >= y1 && y <= y2;
  return result;
}

// console.log(pointInRectangle(5, 50, 0, 0, 10, 10));

const pointInCircle = (a, b, r, x, y) => {
  const res = (x - a) ** 2 + (y - b) ** 2 <= r ** 2;
  return res;
}

// console.log(pointInCircle(0, 0, 1, 0, 0) === true);
// console.log(pointInCircle(0, 0, 1, 1, 0) === true);
// console.log(pointInCircle(0, 0, 1, 1, 1) === false);
// console.log(pointInCircle(0, 0, 1, Math.sqrt(0.8), 1 / 3) === true);


// январь Январь ЯнВаРь
// const getSeason = (month) => {
//   const tempMonth = month.toLowerCase();

//   if ((tempMonth === 'декабрь')
//     || (tempMonth === 'январь')
//     || (tempMonth === 'февраль')
//   ) {
//     return 'Зима';
//   }

//   if ((tempMonth === 'март')
//     || (tempMonth === 'апрель')
//     || (tempMonth === 'май')
//   ) {
//     return 'Весна';
//   }

//   if ((tempMonth === 'июнь')
//     || (tempMonth === 'июль')
//     || (tempMonth === 'август')
//   ) {
//     return 'Лето';
//   }

//   if ((tempMonth === 'сентябрь')
//     || (tempMonth === 'октябрь')
//     || (tempMonth === 'ноябрь')
//   ) {
//     return 'Осень';
//   }
// }

const getSeason = (month) => {
  const tempMonth = month.toLowerCase();

  switch (tempMonth) {
    case 'январь':
    case 'февраль':
    case 'декабрь':
      return 'Зима';

    case 'март':
    case 'апрель':
    case 'май':
      return 'Весна';

    case 'июнь':
    case 'июль':
    case 'август':
      return 'Лето';

    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
      return 'Осень';

    default:
      return 'Такого месяца не существует';
  }
}

console.log(getSeason('декабрь') === 'Зима');
console.log(getSeason('январь') === 'Зима');
console.log(getSeason('февраль') === 'Зима');

console.log(getSeason('март') === 'Весна');
console.log(getSeason('апрель') === 'Весна');
console.log(getSeason('май') === 'Весна');
console.log(getSeason('мАй') === 'Весна');
console.log(getSeason('МАЙ') === 'Весна');

console.log(getSeason('июнь') === 'Лето');
console.log(getSeason('июль') === 'Лето');
console.log(getSeason('август') === 'Лето');

console.log(getSeason('сентябрь') === 'Осень');
console.log(getSeason('октябрь') === 'Осень');
console.log(getSeason('ноябрь') === 'Осень');
console.log(getSeason('Блабла') === 'Такого месяца не существует');
