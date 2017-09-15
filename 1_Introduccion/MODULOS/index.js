console.log("Iniciando index.js");

const fs = require('fs');
const test = require('./modulo');

let file = 'archivo.txt';
const data = 'Hola mundo';

fs.appendFile(file,data, (err) => {
	if(err){
		console.log("No se puede insertar data");
	}
});

