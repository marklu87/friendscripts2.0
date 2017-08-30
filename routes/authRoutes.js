var db = require("../models");
var path = require("path");
 module.exports = function(app) {

//sign up get route
	app.get('/auth/signup', function(req, res, next) {
 		res.sendFile(path.join(__dirname, "../public/signUp.html"));

 	});
	app.get('/auth/profile', function(req, res, next) {
 		console.log("req.user:");
 		console.log(req.user);

 	});

//sign up post route
 	app.post("/auth/signup", function(req, res) {
 		console.log("req.body:"+req.body)
 		req.login(req.body, function(){
 			console.log("req.user 1");
 			console.log(req.user);
 			res.redirect('/auth/profile');
 		});

 	});
 };