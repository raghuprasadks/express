var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send("Hello world");
});

app.get('/view',function(req,res){
	res.send("You are viewing me");
});
app.post('/submit',function(req,res)
	{
		res.send("You have called a post method using submit");
	});
app.listen(3000);