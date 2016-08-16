var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var volleyball = require('volleyball');
var swig = require('swig');
var mainRouter = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', mainRouter);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('ERROR');
});

app.listen(port, function() {
	console.log("Server is listening intently at port " + port + "...");
});

