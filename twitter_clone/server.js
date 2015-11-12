var express =  require('express');
var http = require('http');
var hbs =  require('hbs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var routes = require('./routes/routes')

app = express();

var env = process.env.NODE_ENV || 'development';

if('development' == env){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'html');
	app.engine('html', hbs.__express);

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(express.static(__dirname + '/public'));
};


app.use('development', function(){
	app.errorHandler({
		showStack: true,
		dumpExceptions: true
	});
});

app.use('/', routes);

var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'tsab11211',
	database: 'twitter_db'

});


connection.connect(function(error){
	if(error){
		console.log('Can\'t connect to database');
		process.exit(code=0);
	}

	console.log('connected to database');
})

http.createServer(app).listen(app.get('port'), function(){
	console.log('express server listening on port ' + app.get('port'));
});