var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('customerapp', ['users']);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){

	db.users.find(function (err, docs) {
	// docs is an array of all the documents in mycollection
	console.log(docs);
		res.render('customertemplate',{
		title:"customers",
		users: docs
	});

	})
/*
	res.render('customertemplate',{
		title:"customers",
		users: users
	});
	*/
});

app.post('/users/add',function(req,res){
var newUser={
	first_name:req.body.first_name,
	last_name:req.body.last_name,
	email:req.body.email
}
	console.log(newUser);
	db.users.insert(newUser,function(err,result)
		{
			if(err)
				console.log(err);
			res.redirect('/');
		});
});

app.listen(3000,function()
	{
		console.log("Server is running");
	});