var db = require("../models");
var path = require("path");
var passport = require('passport');
 module.exports = function(app) {



//sign up get route
	app.get('/auth/signup', function(req, res, next) {
 		res.sendFile(path.join(__dirname, "../public/signUp.html"));

 	});
	app.get('/auth/profile', function(req, res, next) {
    console.log("here");
 		res.json(req.user);



 	});

//sign up post route
 	app.post("/auth/signup", passport.authenticate('local-signup', {
        successRedirect: '/newStory'
        ,
        failureRedirect: '/auth/signup'
    }
    ));


  app.post("/auth/signin", passport.authenticate('local-signin', {
        successRedirect: '/newStory',
        failureRedirect: '/auth/signup'
    })

      );


 	};
