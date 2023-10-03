// Написать функцию, которая возвращает неполное
// частное от деления двух чисел

const div = (x, y) => {
  let result = Math.floor(x / y);
  return result;
}

// console.log(`${div(10, 4)}`); // hard
// console.log(div(10, 4)); // medium

let answer = div(11, 4); // easy
console.log(answer);

answer = div(15, 4);
console.log(answer);

answer = div(75, 100);
console.log(answer);

answer = div(4, 11);
console.log(answer);

answer = div(0, 0);
console.log(answer);

answer = div(-7, 2);
console.log(answer);
