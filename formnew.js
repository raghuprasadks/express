var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(express.static('public'));
app.get('/home',function(req,res){
	res.render('formdatanew');
});
app.post('/',function(req,res){
	console.log(req.body);
	res.send("Received your request");
});
app.listen(3000);