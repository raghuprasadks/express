var express = require('express');
var bodyParser = require('body-parser');
//var multer = require('multer');
//var upload = multer();
//var cookieParser = require('cookie-parser');
var app = express();
//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(upload.array());
//Require the Router we defined in movies.js
var prodapi = require('./productapi.js');
console.log('server started');
//Use the Router on the sub route /movies
app.use('/products', prodapi);
app.listen(3000);