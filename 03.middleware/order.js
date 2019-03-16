var express = require('express');
var app = express();
//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start " + Date.now());
  next();
});
//Route handler
app.get('/', function(req, res, next){
   console.log('get request');
   res.send("Middle");
   next();
});
app.use('/', function(req, res){
   console.log('End ' +Date.now());
});
app.listen(3000);