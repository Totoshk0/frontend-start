// const isRequiredLength = (password) => {
//   return password.length >= 8;
// }

const isRequiredLength = (password) => password.length >= 8;

console.log(isRequiredLength('qwerty'));
console.log(isRequiredLength('qwertyuiop'));

const result = isRequiredLength('qwerty1234');
console.log(`result: ${result}`);
console.log(`typeof result: ${typeof result}`);
