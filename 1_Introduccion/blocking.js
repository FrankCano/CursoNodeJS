const fs = require('fs'); // bulit-in package

let contents = fs.readFileSync("/etc/hosts");

console.log(contents);
console.log('Doing something else');