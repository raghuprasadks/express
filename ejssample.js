var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
/*
app.set('view engine', 'pug');
app.set('views','./views');
*/
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

var users=
[
	{
		id:1,
		first_name:"raghu",
		last_name:"prasad",
		email:"prasadraghuks@gmail.com"
	},
	{
		id:2,
		first_name:"vidya",
		last_name:"prasad",
		email:"vidyaraghuprasad@gmail.com"
	}
]

app.get('/',function(req,res){
	res.render('index',{
		title:"customers",
		users: users
	});
});

app.listen(3000,function()
	{
		console.log("Server is running");
	});