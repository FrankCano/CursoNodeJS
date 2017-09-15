const http = require("http");
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
	res.statusCode = 200; //OK
	res.writeHead(200, {"Content-Type":"text/html"}); // 
	fs.readFile('./index.html', (error,content) => {
		res.write(content);
		res.end();
	});
});

server.listen(port, hostname, () => {
	console.log("Servidor corriendo en " + `http://${hostname}:${port}/`);
});
