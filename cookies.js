var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/',function(req,res){
	res.cookie('myCookie','Cookies for Express');
	res.end('Hello Cookies');
});
app.get('/remove',function(req,res){
	console.log('Removing cookies');
	res.clearCookie('myCookie');
});
app.listen(3000);