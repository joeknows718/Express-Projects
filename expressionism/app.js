var express = require('express');
var app = express();

var hbs = require('hbs')

var blogEngine = require('./blog');

var routes = require('./routes/routes')


app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static('static'));

//Routes!!!!!!

app.get('/', routes.index );

app.get('/article/:id', routes.article );

app.listen(3000);



