var express = require('express');
var app = express();
var hbs = require('hbs');

var port = 3000 

//set up static directory 
app.use(express.static('static'));

//set up views engine
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get("/", function(req, res){
	res.send("It Works")
});

app.listen(port);
console.log("Listening on port " + port)