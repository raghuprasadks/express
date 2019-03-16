var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/* Custom middleware
var logger = function (req,res,next)
{
	console.log('Logging middleware');
	next();
}
app.use(logger);
*/

// View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// access static path
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
	console.log('/');
res.render('index');
});

app.listen(3000,function(){
	console.log('Server started on port 3000');
})