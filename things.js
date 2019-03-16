var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
	res.send("Getting this from router get method");
});

router.post('/',function(req,res)
	{
		res.send("Getting this from router post method");
	});

router.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});

router.get('/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

router.get('/:name/:city/:pin([0-9]{6})', function(req, res){
   res.send('id: Pattern Matched Routes' + req.params.pin);
});

//Other routes here
router.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

module.exports = router;