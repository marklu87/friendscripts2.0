// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // cms route loads cms.html
  app.get("/read", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/read.html"));
  });

  // blog route loads blog.html
  app.get("/join", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/join.html"));
  });

  // authors route loads author-manager.html
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

};
