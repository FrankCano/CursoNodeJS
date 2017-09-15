console.log("asdasdas");

// Numeros 
let num = 312.123;

// String
let name = "sad"

// objetos
let objeto = {
	name : 'Mary',
	age : 24,
	say(name){
		console.log("Hi! " + name);
	}
};

console.log(objeto['name'] );
console.log(objeto.age);
objeto.say('Gerson');

// ES5
function suma (a,b){
	let c = a+b;
	return c;
}

// ES6
// This is an arrow function
const addOne = (num) => num+1;
let i = 0; 

// Bucles
while( i < 5 ){
	// La triple === verifica que sean del mismo tipo
	if(i === 3){
		console.log(addOne(i));		
	}
	i++;
}

// Arrays
let arr = ["Apple", "Orange", "Pear",1];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// The for..of doesn’t give access to the number of the current element, just its value
for(let fruit of arr) {
	console.log(fruit);
}

for (let key in arr) {
	console.log(arr[key]);
}

let users = [
  {
	  	id: 1, 
		name: "John"
	},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

let names = ["Guishe","Racso","Erick"]

let lengths = names.map(item => item.length);
console.log(lengths);

names.forEach((item, index, array) => {
	console.log(`${item} is at index ${index} in ${array}`);
});





