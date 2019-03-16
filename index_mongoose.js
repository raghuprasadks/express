var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/mongoosedb');
var personSchema = mongoose.Schema(
	{
		name: String,
		age: Number,
		nationality : String
	});
var Person = mongoose.model("Person",personSchema);

app.get('/',function(req,res)
	{
		console.log('Mongoose Sample');
		res.send('Mongoose Sample');
	});
app.post('/person',function(req,res){
	var personInfo = req.body;
	console.log('What has come from post' +personInfo);
	var newPerson = new Person({
		name: personInfo.name,
		age: personInfo.age,
		nationality: personInfo.nationality
	});

	newPerson.save(function(err,Person){

		if (err)
			console.log('error while saving data' +err);
		else
			console.log('success: Person Info is created #' +Person.name);
	});
});

app.get('/people',function(req,res)
	{
		console.log('Mongoose Sample');
		Person.find(function(err,response)
			{
			//	console.log('Mongoose Sample' +res.json(response));
				res.json(response);
				
			});
		
	});

app.put('/person/:id',function(req,res){
	console.log('Inside put:test: what is the id ' +req.params.id);
	Person.findByIdAndUpdate(req.params.id,function(err,response){
		if(err)
			console.log('error while updating document' +err);
		console.log('document is updated');
	});
});
app.delete('/people/:id',function(req,res){
	Person.findByIdAndRemove(req.params.id,req.body,function(err,response){
		if(err)
			console.log('Error while deleting the document');
		else
			console.log('document removed');
	})
});
app.listen(3000);