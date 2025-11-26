const http = require('http');
const requestHandler = require('./chunk');

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () => {
  console.log("Server running at http://localhost:3000");
});
