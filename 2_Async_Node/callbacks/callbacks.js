let getUser = (codigo, callback_function ) => {
	let user = {
		codigo : codigo,
		nombre : "George"
	}

	setTimeout(()=>{
		user.nombre = "Erick";
		callback_function(user);
	},3000);

	callback_function(user);
}

getUser(20093131,(userObject) => {
	console.log(userObject);
});