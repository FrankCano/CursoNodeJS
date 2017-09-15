let notes = {
	title : 'Nota1',
	body : 'Body1'
};

let stringJSON =  JSON.stringify(notes);
// convierte a string >:v burros
console.log(typeof(JSON.stringify(notes)));

// convierte de object a string :v
console.log(typeof(JSON.parse(stringJSON)));

