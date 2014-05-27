var websocket = require("nodejs-websocket");

var server = websocket.createServer(function(conn){
	console.log("A new connection is established");
	conn.on("text",function(data){
		console.log("message from client..", data);
		server.connections.forEach(function(con){
			con.sendText(data);
		});
	});
}).listen(9090);
console.log("Chat server running on port 9090..!!");