const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req,res) =>{
	res.write("Hola cachimbos");
	res.end();
});

server.listen(port,hostname,() => {
	console.log("Servidor corriendo en "+ `http://${hostname}:${port}/`);
});