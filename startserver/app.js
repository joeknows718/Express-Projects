var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('This is homepage');
});

app.get('/about', function(req, res){
	res.send('This is the about page.')
})

app.listen(3000);
console.log("Listening on port " + port);
