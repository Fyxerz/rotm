// HTTP server stuff
var express = require('express');
var vue = require('vue');
var db = require('./posts');

var app = new express();
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('index')
})
app.listen(3000);
