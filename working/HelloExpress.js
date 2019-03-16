// to install express globally
// npm install -g express
// to check npm list -g

// npm init
// npm install express --save
// node HelloWorld.js
var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.get('/welcome', function(req, res){
	res.send("Welcome to the world of Express");
});
app.get('/reqparam/:id', function(req, res){
	console.log('Request params',req.params);
res.send("Request params.Express.req.params # " 
   	+req.params.id);
});
app.get('/queryparams', function(req, res){
	console.log('Query params',req.query);
 res.send("Welcome to  Express.req.query# " 
   	+req.query.city);
});
app.post('/postme',function(req,res)
{
	console.log('postme params',req.params);
	res.send("You have used post method.");
});
app.listen(3000);

