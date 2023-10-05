// const register = (username) => {
//   return `Hello, ${username}!`;
// }
const register = (username) => `$Hello, ${username}!`;

// const registerUser = (username = 'Неопознанный слоник') => {
//   return `Привет, ${username}!`;
// }
const registerUser = (username = 'Неопознанный слоник') => `Привет, ${username}!`;


let info = register();
console.log(info); // Привет, undefined!

info = registerUser();
console.log(info); // Привет, Неопознанный слоник!
