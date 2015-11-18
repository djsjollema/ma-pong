var express = require("express");
var app = express();
var server = require("http").Server(app);
var socket = require("socket.io")(server);

server.listen(3000);

app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
	res.sendFile("index.html");
});

app.get("/left",function(req,res){
	res.sendFile(__dirname + "/public/left.html");
});

app.get("/right",function(req,res){
	res.sendFile(__dirname + "/public/right.html");
});

socket.on("connection",function(socket){
	console.log("connect");
	socket.on("left",function(data){
		console.log(data);
	})
})
