var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path'); // might be unnecessary

var app = express();

// SWIG RENDERING //
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// LOGGER MIDDLEWARE //
app.use(morgan('dev'));

// PARSING FROM HTML //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// if trying to access bower, then open up bower components
app.use('/bower', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));


// app.get('/', function (req, res) {
// 	res.redirect('/wiki');
// });

// app.use(function (err, req, res, next) {
// 	console.error(err);
// 	res.status(500).send(err.message);
// });

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.error(err);
	res.render(
		'error'
	);
});

module.exports = app;
