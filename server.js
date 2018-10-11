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
	courseID: String,
	className: String,
	createdByProfNID: String,
	startTime: String,
	endTime: String,
	numEnrolled: Number
});

var lectureSchema = new mongoose.Schema({
	classID: String,
	date: Date,
	numStudents: Number
});

var Student = mongoose.model("Student", studentSchema);
var Professor = mongoose.model("Professor", professorSchema);
var Class = mongoose.model("Class", classSchema);
var Lecture = mongoose.model("Lecture", lectureSchema);

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// *** Professor API Routes ***

// incoming json request should be in the form of 
// nid: "professorNidHere"
// name: "professerName"
// password: "password"
// email: "email"
// 
app.post("/api/professors/createProfessor", function(req,res) {

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
// course_id: "cop4331"
// name: "poop"
// start_time: "13:00"
// end_time: "14:50"

app.post("/api/classes/create/:id", function(req, res) {
	// "class" is a reserved word in js
	var classy = new Class({
		courseID: req.body.course_id,
		className: req.body.name,
		createdByProfNID: req.params.id,
		startTime: req.body.start_time,
		endTime: req.body.end_time
	});

	if(!req.body.course_id) {
		handleError(res, "Invalid user input", "Missing course id", 400);
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

// View all classes created by a professor
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

// Delete a class according to object id of class
app.post("/api/classes/delete/:id", function(req, res) {
	Class.findOneAndDelete({_id: req.params.id}, function(err, deletedClass) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete class");
		}
		else {
			if(!deletedClass) {
				res.json({"error": "Failed to delete class"});
			}
			else {
				res.json("Success");
			}
		}
	});
});

// *** Student API Routes ***

// JSON
// nid: "studentNID"
// name: "Joe Smoe"
// email: "email"

app.post("/api/students/createStudent", function(req, res){
	var student = new Student({
		studentNID: req.body.nid,
  		name: req.body.name,
  		email: req.body.email
	});

	if(!req.body.nid || !req.body.name || !req.body.email) {
		handleError(res, "Invalid user input", "Missing Creation Parameter", 400);
	} 
	else {
		student.save(function(err, student) {
			if(err) {
				handleError(res, "Database error", "Error saving user data");
			}
			else {
				console.log("Student successfully created");
				res.status(201).json("success");
			}
		});
	}
});

app.get("/api/students", function(req, res){
	Student.find(function(err, students) {
		if(err) {
			handleError(res, err.message, "Couldn't get students");
		}
		else {
			res.status(201).json(students);
		}
	});
});