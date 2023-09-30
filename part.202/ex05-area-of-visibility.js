// Область видимости
// let a = 12;

// const func1 = (a) => 2 * a;

{
  let a1 = 12;
  console.log(`a before = ${a1}`);

  function func1(a) {
    console.log(`a1 in func1 ex1 = ${a}`);
    a = 13;

    console.log(`a1 in func1 ex2 = ${a}`);
    return a * 2 + a;
  }
  let x = 10;
  console.log(`x before = ${x}`);

  console.log(func1(x));
  console.log(`x after = ${x}`);
  console.log(`a after = ${a1}`);
}