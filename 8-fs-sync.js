const {readFileSync, writeFileSync} = require('fs');


//to utf-8 proste znamena ze to bude text
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `The combination of these strings is ${first + ' ' +second}`);


console.log(first, second);