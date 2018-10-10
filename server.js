const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const config = require('./dbcreds');
const crypto = require("crypto");

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
// res.sendFile(path.join(__dirname, 'public/index.html'));
// });
// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
  console.log("App now running on port", port);
});

var studentSchema = new mongoose.Schema({
  studentNID: String,
  name: String,
  email: String,
  studentUUID: String
});

var professorSchema = new mongoose.Schema({
  profNID: String,
  name: String,
  hashPassword: String,
  hasPaid: Boolean, 
  bleUUID: String,
  email: String
});

var Student = mongoose.model("Student", studentSchema);
var Professor = mongoose.model("Professor", professorSchema);

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// incoming json request should be in the form of 
// nid: "professorNidHere"
// name: "professerName"
// password: "password"
// email: "email"
// 
app.post("/api/createProfessor", function(req,res) {

  var professor = new Professor({
    profNID: req.body.nid,
    name: req.body.name,
    hashPassword : crypto.createHash('sha256').update(JSON.stringify(req.body.password)).digest('hex'),
    email : req.body.email
    })
  if(!req.body.nid || !req.body.name || !req.body.password || !req.body.email) {
    handleError(res, "Invalid user input", "Missing Creation Parameter", 400);
  } else {
    professor.save(function(err, professor) {
    if(err) {
      handleError(res, "Databse error", "Error saving user data");
    } else {
     console.log("Professor successfully created!");
     res.status(201).json("success");
     }
    });
  }
});
