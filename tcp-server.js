var net = require('net')

var server = net.createServer(function(socket) {
	socket.write('hello\n');
	socket.end('world\n');

	//what we do when a package arrives
	socket.on('data', function(data) {
		socket.write(data);
	});
});

server.listen(4000);