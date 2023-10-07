// index.js

import readlineSync from 'readline-sync';

const text = readlineSync.question(`text: `);
console.log(`>> ${text}`);
