var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
var person =
{
	name:"raghu",
	city:"Bengaluru"
}
var people =
[
{
	name:"raghu",
	city:"Bengaluru"
},
{
	name:"ravi",
	city:"mysore"
},


]
/*
app.get('/',function(req,res){
	res.send('Hello World');
});
*/
app.get('/',function(req,res){
	res.json(person);
});

app.listen(3000,function()
	{
		console.log("Server is running");
	});