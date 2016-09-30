// https://nodejs.org/en/about/


const http = require('http');
const host = '127.0.0.1';
const port = 3000;

// arrow function :)
const server = http.createServer( (rq, rs) => {
	rs.statusCode = 200;
	rs.setHeader('Content-Type', 'text/plain');
	rs.end('Sample');
	console.log(rq);
});

server.listen(port, host, () => {
	console.log('Server ${host}:${port}');
});
