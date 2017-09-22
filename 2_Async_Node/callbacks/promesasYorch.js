let promesa = new Promise((resolve,reject) => {
	setTimeout(()=> {
		//resolve("Por fin acabe la tesis");
		reject("Yorch flojo y vago >:v ");
	},2500);
});

promesa.then((mensaje) => {
	console.log("Exito: ", mensaje);
}, (error) => {
	console.log("Ya sabía...",error);
});