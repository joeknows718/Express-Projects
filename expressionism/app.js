//dependancies 
var express = require('express');
var app = express();
var hbs = require('hbs')
var bodyParser  = require('body-parser');
var nodemailer =  require('nodemailer');
var blogEngine = require('./blog');
var routes = require('./routes/routes')

//setupview engine 
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

//setup statif folder 
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Load Routes!!!!!!
app.use('/', routes);

app.use(function(req, res, next){
	res.status(404);
	res.render('404', {title:'Whut?'})
})

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500', {title:'You broke the site!'});
});
//lisen for requests to server 
app.listen(3000);



module.exports = app;