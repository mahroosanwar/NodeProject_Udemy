const http = require('http');

const route = require('./routes');

const server = http.createServer(route.handler);

server.listen(3000);
