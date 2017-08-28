// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// var passport = require('passport');
// app.use(express.static(__dirname + '/'));
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  app.get("/home/:userName", function(req, res) {
    // passport.serializeUser(function(user, done) {
    //   done(null, user.id);
    // });
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // newStory route loads create.html
  app.get("/newStory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  // read route loads read.html
  app.get("/read", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/read.html"));
  });

  // join route loads join.html
  app.get("/join", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/join.html"));
  });


app.get("/edit/:storyID", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/edit.html"));
  });

};
