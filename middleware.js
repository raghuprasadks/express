var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/', function(req, res){
	console.log("After:Middleware");
   res.send('With Middleware');
});

app.listen(3000);