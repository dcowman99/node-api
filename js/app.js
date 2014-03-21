//=========== require ==============
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//=========== config ===============
mongoose.connect('mongodb://localhost:27017/listings'); 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.listen(3000);
console.log('Listening on port 3000');

app.use(function(err, req, res, next){
	  console.error(err.stack);
	  res.send(500, 'Something broke!');
});

//Enable CORS on ExpressJS
app.all('*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");  //TODO:  config.allowedDomains
	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	  next();
	 });

var listings = require('./models/Listing');

//=========== routes =================

//mongoose method
//app.get('/jsonp/countall', function(req, res) {
//	listings.count(
////			{
////				score:{$lt:10},
////			 	word:{$gt:"FOO"}
////			},
//			function (err, count) {
//			if (err)
//				res.send(err);
//			var resp = {result:count};
//			res.jsonp(resp);
//		});
//});
//
////mongoose method
//app.get('/jsonp/listall2',   function(req, res) {
//	listings.find(
//			//Deserialize(req.query.criteria)			
//		)
//		.limit(req.query.pgsize) 
//		//query.skip(req.query.pgsize*(req.query.pgnum-1)); 
//		.sort(req.query.sort)
//		//query.select();   //select only certain fields
//		.exec(function (err, result) {
//			if (err)
//				res.send(err);
//			res.jsonp(result);
//		});
//
//});
app.get('/jsonp/listing/:id',   function(req, res) {
	listings.findOne({'_id':req.params.id},
		function (err, result) {
		if (err)
			res.send(err);
		res.jsonp(result);
	});
});
app.post('/cors/listing',  [express.urlencoded(), express.json()], function(req, res, next) {  
	listings.findOne({'_id':req.body.id},
		function (err, result) {
		if (err)
			res.send(err);
		res.send(result);
	});
});
app.post('/cors/listingCount',  [express.urlencoded(), express.json()], function(req, res, next) {  
	
	listings.count(req.body.criteria,
			function (err, count) {
			if (err)
				res.send(err);
			var resp = {result:count};
			res.send(resp);
		});
});
app.post('/cors/listings',  [express.urlencoded(), express.json()], function(req, res, next) {  
	
	listings.find(req.body.criteria)
		.limit(req.body.pgsize) 
		.sort(req.body.sort)
		.skip(req.body.pgsize*(req.body.pgnum-1))
		//query.select();   //select only certain fields
		.exec(function (err, result) {
			if (err)
				res.send(err);
			res.send(result);
		});
});



//.find({ occupation: /host/ })
//.where('name.last').equals('Ghost')
//.where('age').gt(17).lt(66)
//.where('likes').in(['vaporizing', 'talking'])
//.limit(10)
//.sort('-occupation')
//.select('name occupation')
//.exec(callback);





//User.findOne({'fb.gender': 'male'}, callback);
//User.where('fb.gender', 'male').findOne(callback);

//UserSchema.namedscope('male').where('fb.gender', 'male');
//var User = mongoose.model('User', UserSchema);
//// Now you can write queries even more succinctly and idiomatically
//User.male.findOne(callback);






