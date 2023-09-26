let age = 32
const firstName = 'John';
const lastName = 'Doe'

const fullName = firstName + ' ' + lastName;

let userInformation = fullName + ', ' + age + ' y.o.';

console.log(userInformation);

userInformation = firstName + ' ' + lastName + ', ' + age + ' y.o.';
console.log(userInformation);

userInformation = `${firstName} ${lastName}, ${age} y.o.`;
userInformation = `${firstName} ${lastName}, ${age} y.o.`;

console.log(userInformation);

// console.log(firstName, lastName, ',', 32, 'y.o.');