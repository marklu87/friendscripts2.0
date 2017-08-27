// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require('express-session');
// var auth = require('./public/js/login.js')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));


//auth Sessions
  // app.use(cookieParser());
  // app.use(session({secret: 'friendscripts',resave: true, saveUninitialized: true}));
  // app.use(auth.initialize());
  // app.use(auth.session());
  
  
// Routes
// =============================================================
require("./routes/post-api-routes.js")(app);
require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
