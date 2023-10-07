# Подготовка

Для ввода данных используется библиотека [readline-sync](https://www.npmjs.com/package/readline-sync)

## Создание нового проекта
- новый проект `npm init -y`
- в [package.json](./source-code/package.json) добавить `"type": "module",`
- в [package.json](./source-code/package.json) добавить `"start": "node index.js",`
- добавление библиотеки `npm i readline-sync`
- при необходимости выполнить `npm install`
- запустить `npm start`

# Условия
В языке JavaScript условие реализовано оператором if:

```js
if (<условие>) {
  // делать, если условие верно
}
else {
  // делать, если условие неверно
};
```
## Особенности:
- вторая часть (`else`) может отсутствовать (неполная форма);
- если в блоке один оператор, то можно убрать скобки { и }.

### Задача. Ввести два числа и вывести наибольшее из них.

Алгоритм решения:
![Полная форма if-else](drawio/img01.drawio.png)

### Пример программы, реализующей алгоритм:

[code](./source-code/if-else/ex01-if-else.js)

```js
const a = readInt('a: ');
const b = readInt('b: ');

let max;

if (a > b) {
  max = a;
} else {
  max = b;
}

console.log(`>> max(${a}, ${b}): ${max}`);
```

## Неполная форма условного оператора:
![Неполная форма if-else](drawio/img02.drawio.png)

```js
const a = readInt('a: ');
const b = readInt('b: ');

let max = a;

if (b > max) {
  max = b;
}

console.log(`>> max(${a}, ${b}): ${max}`);
```
## Тернарная операция

Тернарный оператор (`? :`) представляет собой условный оператор и часто используется вместо определённых видов конструкций `if-then-else`. Общая форма этого оператора:

- `expression1 ? expression2 : expressionЗ;`
В случае сохранения результата вычисления
- `variable = expression1 ? expression2 : expressionЗ;`

*Если `expression1` — истинно, то берётся `expression2`, иначе берётся `expression3`.*

### Чётное или нечётное число.

```js
const maximumTwoNumbersTernaryOperator = (a, b) => {
  let max = (a > b) ? a : b;
  return max;
}
```

```js
const isEvenOrOdd = (value) => {
  let result = value % 2 === 0 ? 'чётное число' : 'нечётное число';
  return result;
}
```
