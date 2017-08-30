var passport = require('passport')
var session = require('express-session');

module.exports = function(app){
  app.use(session({secret: 'friendscripts',resave: false, saveUninitialized: false}));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done){
    console.log("serializeuser");
    console.log(user);
    done(null, user) ;
  })

  passport.deserializeUser(function(user, done){
    done(null, user);
  })

  require('./strategies/localstrategy.js')();

}