const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const config = require('./dbcreds');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the database before starting the application server.
mongoose.connect(config.dburl);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
	// should be connected
	console.log('connected to remote database');
});


// app.get('*', function(req,res){
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });
  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});