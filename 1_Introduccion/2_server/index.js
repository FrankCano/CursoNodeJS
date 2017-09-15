const http = require("http");
const welcome = require("./welcome");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(welcome.titulo);
    res.write("\n" + welcome.message);
    res.write("\nHoy es: " + welcome.getDateTime());
    res.end();
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
