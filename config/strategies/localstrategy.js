var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
	console.log('passport use')
passport.use('login', new LocalStrategy({
	usernameField:'email',
	passwordField: 'psw'
    
  },

  function(username, password, done) { 
    var user= {
    	username: username,
    	password: password
    }
    console.log("local stragety");
    console.log("user1:"+user);
    done(null, user);
	}
));

};