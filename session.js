var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan=require("morgan");
var app = express();

app.use(morgan('dev'));
app.use(cookieParser());
//app.use(session({session({secret:'secretkey',saveUninitialized:true,resave:true,cookie:{maxAge:60000}})}));
app.use(session({secret:'secretkey',saveUninitialized:true,resave:true,cookie:{maxAge:6000}}));

app.get('/',function(req,res,next){
	console.log('value of views ' +req.session.views);
	if(req.session.views)
	{
		req.session.views++;
		res.setHeader('Content-Type','text/html')
		res.write('<p>Views: '+req.session.views+'</p>')
		res.write('<p>Expires in: ' +(req.session.cookie.maxAge/1000)+'s</p>')
		//res.send('session checking');
	}else{
		req.session.views=1;
		res.write('Refresh Page');
	} 
});
app.listen(3000);