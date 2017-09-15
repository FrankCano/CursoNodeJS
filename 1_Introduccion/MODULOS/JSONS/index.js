let obj = {
	name: 'Gishe',
	age: 22,
	comentario: [
		'asdasdasdasd',
		'asdasdasdasd',
		{
			name: 'ErickALV'
		}
	]
};
let stringObj = JSON.stringify(obj);
let jsonString = '{"name": "Gerson","age": 25}';
let persona = JSON.parse(jsonString);
console.log(typeof(persona));



