let suma = (a,callbackF) => {
	let b = a+5;

	callbackF(b);
};

suma(10,(num)=>{
	console.log(num-1);
});