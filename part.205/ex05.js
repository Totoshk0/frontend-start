// Больше 8 символов и первый символ Q

const isRequiredLength = (password) => password.length >= 8;
const presenceDigit = (password) => password[0] === 'Q';

console.log(isRequiredLength('qwerty'));
console.log(isRequiredLength('qwertyuiop'));
console.log(presenceDigit('qwerty1234'));
console.log(presenceDigit('Qwerty1234'));
