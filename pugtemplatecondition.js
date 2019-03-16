var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/dynamic_view', function(req, res){
   res.render('dynamic_param',{
   user: {name: "Girish", age: "20"}
 //		user:{}
});
});

app.listen(3000);