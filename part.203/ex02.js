// Написать функцию, которая округляет
// число с точностью до count знаков после запятой
// * Специфичные требования заказчика

const round = (number, count) => {
  let result = number.toFixed(count);
  return result;
}

console.log(round(10.5, 0));
console.log(round(10.4, 0));
console.log(round(10.41, 1));
console.log(round(10.51, 1));
console.log(round(10.124, 2));
console.log(round(10.125, 2));
