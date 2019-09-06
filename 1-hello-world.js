const http = require('http');

const server = http.creatServer((req, res) => {
    res.end('Hello Node\n');
});

server.listen(4242, () => {
    console.log('server is running...');
});