const http = require('http');
const app = require('./app');

const PORT =  process.env.PORT || 3000;

let server = http.createServer(app);

server.listen(PORT);