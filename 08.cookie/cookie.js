var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/cookie',function(req, res){
     res.cookie('name' , 'express',{maxAge:9999}).send('Cookie is set');
});

app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
  res.send('check cookie in console');
});

app.get('/clearcookie', function(req,res){
     res.clearCookie('express');
     res.send('Cookie deleted');
});

app.listen(3000);