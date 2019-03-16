var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/status', function(req, res){
   res.send("Active!");
});

app.get('/login', function(req, res){
   res.send("You are logged in!");
});

app.get('/logout', function(req, res){
   res.send("You are logged out!");
});


app.listen(3000);
