const http = require('http');
const app = require('./src/app');
const config = require('./src/config/config');
const server = http.createServer(app);
const connected = require('./src/db/db');

connected();

server.listen(config.PORT, ()=>{ 
    console.log(`Server is running on port ${config.PORT}`);
})