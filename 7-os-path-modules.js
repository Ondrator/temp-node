const { log } = require('console');
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'genereic', 'text.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);


const absolute = path.resolve(__dirname,'content', 'genereic', 'text.txt');
console.log(absolute);
