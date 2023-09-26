const age = 32;
console.log(typeof (age));

const fullName = 'John Doe';
console.log(typeof fullName);

const check = 4 > 5;
console.log(typeof check);

const fail = undefined;
console.log(typeof fail);

const nil = null;
console.log(typeof nil);

const x = 28;
console.log(typeof x);
const y = '09';
console.log(typeof y);
const c = x + y;
console.log(`c = ${c}, ${typeof c}`);
console.log(`c = ` + c + ', ' + typeof c);

// N, Z, Q, I, R

// Z -  parseInt();
const b = parseInt(y);
// R -parseFloat()
// const b = +y;
const r = x + b;
console.log(`r = ${r}, ${typeof r}`);
