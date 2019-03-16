var express = require('express');
var app = express();
app.get('/',function(req,res){
	var err = new Error("Some thing went wrong");
	next(err);
});
app.use(function(err,req,res,next){
	res.status(500);
	res.send("Oops,some thing went wrong");
});
app.listen(3000);