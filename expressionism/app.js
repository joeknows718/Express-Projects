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
app.get('/', routes.index );
app.get('/article/:id', routes.article );
app.get('/contact', routes.contact );
app.post('/contact', routes.contactPost);

//lisen for requests to server 
app.listen(3000);



