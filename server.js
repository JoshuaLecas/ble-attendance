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

var classSchema = new mongoose.Schema({
	classID: String,
	className: String,
	createdByProfNID: String,
	startTime: String,
	endTime: String,
	numEnrolled: Number
});

var Student = mongoose.model("Student", studentSchema);
var Professor = mongoose.model("Professor", professorSchema);
var Class = mongoose.model("Class", classSchema);

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

app.get("/api/professors", function(req, res) {
	Professor.find(function(err, professors) {
		if(err){
			handleError(res, err.message, "Couldn't get professors");
		}
		else {
			res.status(201).json(professors);
		}
	});
});

// JSON
// class_id: "cop4331"
// name: "poop"
// start_time: "13:00"
// end_time: "14:50"

app.post("/api/classes/create/:id", function(req, res) {
	// "class" is a reserved word in js
	var classy = new Class({
		classID: req.body.class_id,
		className: req.body.name,
		createdByProfNID: req.params.id,
		startTime: req.body.start_time,
		endTime: req.body.end_time
	});

	if(!req.body.class_id) {
		handleError(res, "Invalid user input", "Missing class id", 400);
	}
	else {
		classy.save(function(err, classy){
			if(err) return console.log("Didn't save");
			else {
				console.log("Class successfully created");
				res.status(201).json(classy);
			}
		});
	}

});

app.get("/api/classes/:id", function(req, res) {
	Class.find({createdByProfNID: req.params.id}, function(err, profClasses) {
		if(err) {
			handleError(res, err.message, "Couldn't get classes for professor");
		}
		else {
			res.status(201).json(profClasses);
		}
	});
});