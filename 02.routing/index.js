var express = require('Express');
var app = express();
var router = require('./router.js');

//both index.js and router.js should be in same directory
app.use('/', router);

app.listen(3000);