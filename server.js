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
	date: String,
	numStudents: Number
});

var accessKeySchema = new mongoose.Schema({
	keyValue: String,
	isUsed: Boolean
});

var usesSchema = new mongoose.Schema({
	keyID: String, // obj id of key
	usedByProfNID: String
});

var isInSchema = new mongoose.Schema({
	enrolledCourseID: String, // This should be the object ID of the course they are in
	studentNID: String
});

var attendedSchema = new mongoose.Schema({
	lectureID: String, // obj id of lecture
	studentNID: String
});

var Student = mongoose.model("Student", studentSchema);
var Professor = mongoose.model("Professor", professorSchema);
var Class = mongoose.model("Class", classSchema);
var Lecture = mongoose.model("Lecture", lectureSchema);
var AccessKey = mongoose.model("AccessKey", accessKeySchema);
var Uses = mongoose.model("Uses", usesSchema);
var isIn = mongoose.model("isIn", isInSchema);
var Attended = mongoose.model("Attended", attendedSchema);

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


// Update the UUID for professors side, find by nid
// json
// "uuid": "ble uuid"
app.post("/api/professors/updateUUID/:id", function(req, res) {
	console.log(req.body);
	Professor.findOneAndUpdate({"profNID": req.params.id}, {"bleUUID": req.body.uuid}, {new: true}, function(err, model){
		if(err) {
			handleError(res, "Error updating", "Error updating professor");
		}
		else {
			console.log(req.params.id);
			console.log(model);
			res.status(201).json(model);
		}
	});
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
	isIn.deleteMany({enrolledCourseID: req.params.id}, function(err) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete students from class");
		}
		else {
			console.log("Successfully deleted all students from class");
		}
	});
	Lecture.find({classID: req.params.id}, function(err, classLectures){
		if(err) {
			handleError(res, err.message, "Couldn't get lectures for class");
		}
		else {
			console.log("Found lectures for class");
			for(var i = 0; i < classLectures.length; i++) {
				Attended.deleteMany({lectureID: classLectures[i]._id}, function(err) {
					if(err) {
						handleError(res, "Database error while deleting", "Failed to deleted attendeds from a lecture");
					}
					else {
						console.log("Successfully deleted attendeds");
					}
				});
				Lecture.deleteOne({_id: classLectures[i]._id}, function(err) {
					if(err) {
						handleError(res, "Database error while deleting", "Failed to delete lecture");
					}
					else {
						console.log("Successfully deleted lecture");
					}
				});
			}			
		}
	});
	Class.findOneAndDelete({_id: req.params.id}, function(err, deletedClass) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete class");
		}
		else {
			if(!deletedClass) {
				res.json({"error": "Failed to delete class"});
			}
			else {
				res.json("Successfully deleted class");
			}
		}
	});
});

// Get class by obj id, have to rewrite prev values you want to keep
// follow json in create class endpoint
app.post("/api/classes/update/:id", function(req, res) {
	console.log(req.body);
	Class.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true}, function(err, model){
		if(err) {
			handleError(res, "Error updating", "Error updating class");
		}
		else {
			console.log(req.params.id);
			console.log(model);
			res.status(201).json(model);
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
  		email: req.body.email,
  		studentUUID: req.body.uuid
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


// id is student nid
app.post("/api/students/deleteStudent/:id", function(req, res) {
	isIn.deleteMany({studentNID: req.params.id}, function(err) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete isIn classes");
		}
		else {
			console.log("Successfully deleted from isIns");
		}
	});
	Attended.deleteMany({studentNID: req.params.id}, function(err) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete attendeds");
		}
		else {
			console.log("Successfully deleted from attendeds");
		}
	});
	Student.findOneAndDelete({studentNID: req.params.id}, function(err, deletedStudent) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete student");
		}
		else {
			if(!deletedStudent) {
				res.json({"error": "Failed to delete student"});
			}
			else {
				res.json("Successfully deleted student");
			}
		}
	});
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

// ** isIn API Routes ** 

// Add student to a class

// :id is the class obj id
// JSON
// nid: "ab123456"

app.post("/api/classes/addToClass/:id", function(req, res){
	var isin = new isIn({
		enrolledCourseID: req.params.id,
		studentNID: req.body.nid
	});

	if(!req.body.nid) {
		handleError(res, "Invalid user input", "Missing Creation Parameter", 400);
	}
	else {
		isIn.save(function(err, isin){
			if(err) return console.log("Didn't save isIn");
			else {
				console.log("isIn successfully created");
				res.status(201).json(isin);
			}
		});
	}

});

// Remove a student from class

// :id is class obj id
// JSON
// nid: "ab123456"

app.post("/api/classes/removeStudent/:id", function(req, res){
	isIn.findOneAndDelete({enrolledCourseID:req.params.id, studentNID: req.body.nid}, function(err, deletedIsIn){
		if(err) {
			handleError(res, "Database error while deleting", "Failed to remove from class");
		}
		else{
			if(!deletedIsIn) {
				res.json({"error": "Failed to remove from class"});
			}
			else {
				res.json("Successfully removed from class");
			}
		}
	});
});

// Simply shows what classes a student is in

// :id is studNID
app.get("/api/students/viewClasses/:id", function(req, res){
	isIn.find({studentNID: req.params.id}, function(err, classesForStud){
		if(err) {
			handleError(res, err.message, "Couldn't get classes for this student");
		}
		else {
			res.status(201).json(classesForStud);
		}
	});
});

// Shows the students enrolled in the class

// :id is class id
app.get("/api/classes/viewStudents/:id", function(req, res){
	isIn.find({enrolledCourseID: req.params.id}, function(err, studentsForClass){
		if(err) {
			handleError(res, err.message, "Couldn't get students for this class");
		}
		else {
			res.status(201).json(studentsForClass);
		}
	});
});

// Mark a student here

// :id is the student's uuid
// JSON
// profUUID: "ble uuid"
// currTime: "13:04"
// currDate: "09/21/2018"

app.post("/api/students/markHere/:id", function(req, res) {
	// Find prof by uuid
	Professor.findOne({bleUUID: req.params.id}, function(err, prof) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find prof");
		}
		else {
			if(!prof) {
				res.status(201).json("Failed to find prof");
			}
			else {
				console.log("Successfully found prof");
				// Find classes for prof
				Class.find({createdByProfNID: prof.profNID}, function(err, profClasses) {
					if(err) {
						handleError(res, "Database error while searching", "Failed to find classes");
					}
					else {
						console.log("Successfully found prof classes");
						// Check if class at curr time
						var indexClass = -1;
						var currentTimeArray = (req.body.currTime).split(":");
						var currentTime = parseInt(currentTimeArray[0] + currentTimeArray[1]);
						for(var i = 0; i < profClasses.length; i++) {
							var startTimeArray = (profClasses[i].startTime).split(":");
							var startTime = parseInt(startTimeArray[0] + startTimeArray[1]);
							var endTimeArray = (profClasses[i].endTime).split(":");
							var endTime = parseInt(endTimeArray[0] + endTimeArray[1]);
							if(startTime <= currentTime && currentTime < endTime) {
								indexClass = i;
								break;
							}
						}
						if(indexClass == -1) {
							handleError(res, "Database error while searching", "Failed to find a class at current time");
						}
						else {
							console.log("Found current class");
							// Find stud by uuid
							Student.findOne({studentUUID: req.params.id}, function(err, stud) {
								if(err) {
									handleError(res, "Database error while searching", "Failed to find stud");
								}
								else {
									if(!stud) {
										res.status(201).json("Failed to find stud");
									}
									else {
										console.log("Found stud");
										// Find isIn by studNID and class_id
										isIn.findOne({enrolledCourseID: profClasses[i]._id, studentNID: stud.studentNID}, function(err, isin) {
											if(err) {
												handleError(res, "Database error while searching", "Failed to find isIn");
											}
											else {
												if(!isin) {
													res.status(201).json("Failed to find isIn");
												}
												else {
													console.log("Found isIn");
													// Find lecture by curr date
													Lecture.findOne({date: req.body.currDate}, function(err, lecture) {
														if(err) {
															handleError(res, "Database error while searching", "Failed to find lecture");
														}
														else {
															if(!lecture) {
																res.status(201).json("Failed to find lecture");
															}
															else {
																console.log("Found lecture");
																// Create Attended if applicable 
																Attended.findOne({studentNID: stud.studentNID, lectureID: lecture._id}, function(err, attended) {
																	if(err) {
																		handleError(res, "Database error while searching", "Failed to find attended");
																	}
																	else {
																		if(!attended) {
																			var attendee = new Attended({
																				studentNID: stud.studentNID,
																				lectureID: lecture._id
																			});
																			attendee.save(function(err, attendee) {
																				if(err) {
																					handleError(res, "Database error while saving", "Failed to save attended");
																				}
																				else {
																					console.log("Successfully created attended");
																					res.status(201).json("Student marked as here");
																				}
																			});
																		}
																		else {
																			console.log("Student has already been marked");
																			res.status(201).json("Student has already been marked here");
																		}
																	}
																});
															}
														}
													});
												}
											}
										});
									}
								}
							});
						}
					}
				});
			}
		}
	});
	
});

// *** Lecture API Routes ***

// Given object id of class, create lecture
app.post("/api/lectures/create/:id", function(req, res){
	var lecture = new Lecture({
		classID: req.params.id,
		date: (new Date().toLocaleString().split(",")[0])
	});
	if(!req.params.id) {
		handleError(res, "Invalid user input", "Missing Creation Parameter");
	}
	else {
		lecture.save(function(err, lecture){
			if(err) return console.log("Didn't save lecture");
			else {
				console.log("Lecture successfully created");
				res.status(201).json(lecture);
			}
		});
	}
});

// Delete according to lecture obj id
app.post("/api/lectures/delete/:id", function(req, res) {
	Attended.deleteMany({lectureID: req.params.id}, function(err) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete attendeds");
		}
		else {
			console.log("Successfully deleted attendeds");
		}
	});
	Lecture.findOneAndDelete({_id: req.params.id}, function(err, deletedLecture){
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete lecture");
		} 
		else {
			if(!deletedLecture) {
				res.json({"error": "Failed to delete lecture"});
			}
			else {
				res.json("Successfully deleted lecture");
			}
		}
	});
});
 
// View all lectures for a class
app.get("/api/lectures/:id", function(req, res) {
	Lecture.find({classID: req.params.id}, function(err, classLectures) {
		if(err) {
			handleError(res, err.message, "Couldn't get lectures for class");
		}
		else {
			res.status(201).json(classLectures);
		}
	});
});

// id is lecture obj id
app.get("/api/lectures/viewAttendance/:id", function(req, res) {
	Lecture.findOne({_id: req.params.id}, function(err, lecture) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find lecture");
		}
		else {
			Attended.find({lectureID: lecture._id}, function(err, listAttendeds) {
				if(err) {
					handleError(res, "Database error while searching", "Failed to find attendeds");
				}
				else {
					res.status(201).json(listAttendeds);
				}
			});
		}
	});
});
