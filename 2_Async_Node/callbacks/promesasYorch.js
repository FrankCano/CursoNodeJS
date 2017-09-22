let promesa = new Promise((resolve,reject) => {
	setTimeout(()=> {
		//resolve("Por fin acabe la tesis");
		reject("Ya sabía que no ibas a acabar la tesis");
	},2500);
});

promesa.then((mensaje) => {
	console.log("Exito: ", mensaje);
}, (error) => {
	console.log("Fallo...",error);
});