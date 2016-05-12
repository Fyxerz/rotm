// HTTP server stuff
var express = require('express');
var db = require('./fakedb');

var app = new express();

// Define jade as view engine.
app.set('view engine', 'pug');

// Set static file path.
app.static('/public/');

// Get root view.
app.get('/', function(req, res) {
	res.render('index', {posts: db.getPosts()})
});

// Start server.
app.listen(3000);
