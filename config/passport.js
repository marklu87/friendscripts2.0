
module.exports = function(app){
  var passport = require('passport')
  var session = require('express-session');
  var bCrypt = require('bcrypt-nodejs');
  var db = require("../models");

  app.use(session({secret: 'friendscripts',resave: false, saveUninitialized: false}));
  app.use(passport.initialize());
  app.use(passport.session());

  db.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.authors.findById(id).then(function(user) {
      if (user) {
          done(null, user.get());
      } else {
          done(user.errors, null);
      }
  });
});

  require('./strategies/localstrategy.js')();

}
