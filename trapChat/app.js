var express = require('express');
var app = express();
var hbs = require('hbs');

var port = 3000;

//set up static directory 


//set up views engine
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.static('static'));


app.get("/", function(req, res){
	res.render("index");
});

var io = require('socket.io').listen(app.listen(port));

// setting up backend chat connection handler  
io.sockets.on('connection', function(socket){
	socket.emit('message', {message : 'Welcome to TrapChat', username:"Gucci"});
	socket.on('send', function(data){
		io.sockets.emit('message',  data);
	});
});

console.log("Listening on port " + port);