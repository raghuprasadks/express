//var app = require('express')();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/profile', upload.array(),
	function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
app.listen(3000);