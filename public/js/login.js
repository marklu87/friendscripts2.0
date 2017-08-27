
//   var db = require("../../models");
//   var passport = require('passport')
//     , LocalStrategy = require('passport-local').Strategy;

//   var auth = function(passport){
//     passport.use(new LocalStrategy(
//     function(username, password, done) {
//       db.Authors.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!Authors) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!Authors.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   )};
// module.exports = auth