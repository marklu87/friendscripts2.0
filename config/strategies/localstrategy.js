

module.exports = function(passport, authors) {


	var LocalStrategy = require('passport-local').Strategy;
	var db = require("../../models");
	var passport = require('passport');

		var bCrypt = require('bcrypt-nodejs');

    var LocalStrategy = require('passport-local').Strategy;


    passport.use('local-signup', new LocalStrategy(

        {

            usernameField: 'email',

            passwordField: 'psw',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },



        function(req, email, password, done) {
					// console.log(req);
            var generateHash = function(password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            db.authors.findOne({
                where: {
                    userName: email
                }
            }).then(function(user) {

                if (user)

                {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else

                {

                    var userPassword = generateHash(password);

                    var data =

                        {

                            authorName: req.body.email,
														userName: req.body.email,
                            password: req.body.psw
                        };
												console.log(data);
                    db.authors.create(data).then(function(newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));

		passport.use('local-signin', new LocalStrategy(


		    {

		        // by default, local strategy uses username and password, we will override with email

		        usernameField: 'email',

		        passwordField: 'psw',

		        passReqToCallback: true // allows us to pass back the entire request to the callback

		    },


		    function(req, email, password, done) {
					console.log("trying to log in");

		        var User = user;

		        var isValidPassword = function(userpass, password) {

		            return bCrypt.compareSync(password, userpass);

		        }

		        db.authors.findOne({
		            where: {
		                email: email
		            }
		        }).then(function(user) {

		            if (!user) {

		                return done(null, false, {
		                    message: 'Email does not exist'
		                });

		            }

		            if (!isValidPassword(user.password, password)) {

		                return done(null, false, {
		                    message: 'Incorrect password.'
		                });

		            }


		            var userinfo = user.get();
		            return done(null, userinfo);


		        }).catch(function(err) {

		            console.log("Error:", err);

		            return done(null, false, {
		                message: 'Something went wrong with your Signin'
		            });

		        });


		    }

		));

}
