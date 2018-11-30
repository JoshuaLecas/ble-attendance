const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const crypto = require("crypto");

// *** Connection and Starting the app ***

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the database before starting the application server.
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
  // should be connected
  console.log('connected to remote database');
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
  console.log("App now running on port", port);
});

// *** Schemas ***
// xxx_id represents obj id from xxx = table

var studentSchema = new mongoose.Schema({
  studentNID: String,
  name: String,
  email: String,
  studentUUID: String
});

var professorSchema = new mongoose.Schema({
  profNID: String,
  name: String,
  password: String,
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
	regCode: String
});

var lectureSchema = new mongoose.Schema({
	class_id: String,
	date: String,
	profUUID: String
});

var accessKeySchema = new mongoose.Schema({
	keyValue: String,
	isUsed: Boolean
});

var usesSchema = new mongoose.Schema({
	key_id: String, // exception, get from access key
	usedByProfNID: String
});

var isInSchema = new mongoose.Schema({
	class_id: String,
	studentNID: String,
	studentUUID: String
});

var attendedSchema = new mongoose.Schema({
	lecture_id: String,
	studentNID: String
});

// *** Models ***

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

app.get("/api/demo", function(req, res) {
	res.status(201).json(process.env.APIKEY);
});

// *** Professor API Routes ***

// Create Professor

// JSON
// nid: "professorNidHere"
// name: "professerName"
// password: "password"
// email: "email"

app.post("/api/professors/createProfessor/:key", function(req,res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}

  var professor = new Professor({
    profNID: req.body.nid,
    name: req.body.name,
    password : crypto.createHash('sha256').update(JSON.stringify(req.body.password)).digest('hex'),
    email : req.body.email,
    hasPaid: false
    });
  if(!req.body.nid || !req.body.name || !req.body.password || !req.body.email) {
    handleError(res, "Invalid user input", "Missing input field", 400);
  } else {
    professor.save(function(err, professor) {
    if(err) {
      handleError(res, "Database error while creating", "Failed to create professor");
    } else {
     console.log("Professor successfully created!");
     res.status(201).json("Successfully created professor");
     }
    });
  }
});

// Login Professor

// JSON
// email: "email"
// password: "password"

app.post("/api/professors/login/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	req.body.password = crypto.createHash('sha256').update(JSON.stringify(req.body.password)).digest('hex');
	Professor.findOne(req.body, function(err, prof) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find professor");
		}
		else {
			if(!prof) {
				handleError(res, "Couldn't find professor", "Failed to find professor");
			}
			else {
				console.log(prof);
				res.json({
					profNID: prof.profNID,
					name: prof.name,
					email: prof.email,
					hasPaid: prof.hasPaid
				});
			}
		}
	});
});

// Delete Professor

// :id - "profNID"

app.post("/api/professors/deleteProfessor/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Uses.findOneAndDelete({usedByProfNID: req.params.id}, function(err, deleteUse) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to remove access key");
		}
		else {
			if(!deleteUse) {
				console.log("No access key to remove");
			}
			else {
				console.log("Successfully deleted uses");
				AccessKey.findOneAndUpdate({_id: deleteUse.key_id}, {isUsed: false}, {new: true}, function(err, accessKey) {
					if(err) {
						handleError(res, "Database error while searching", "Failed to update access key");
					}
					else {
						console.log("Successfully updated access key");
					}
				});
			}
		}
	});

	Class.find({createdByProfNID: req.params.id}, function(err, classes) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find classes");
		}
		else {
			if(!classes) {
				console.log("Failed to find classes");
			}
			else {
				for(var i = 0; i < classes.length; i++) {
					var classDelete =  classes[i];
					isIn.deleteMany({class_id: classDelete._id}, function(err) {
						if(err) {
							handleError(res, "Database error while deleting", "Failed to remove students from class");
						}
						else {
							console.log("Successfully removed all students from class");
						}
					});
					Lecture.find({class_id: classDelete._id}, function(err, classLectures){
						if(err) {
							handleError(res, "Database error while searching", "Couldn't get lectures for class");
						}
						else {
							console.log("Found lectures for class");
							for(var i = 0; i < classLectures.length; i++) {
								Attended.deleteMany({lecture_id: classLectures[i]._id}, function(err) {
									if(err) {
										handleError(res, "Database error while deleting", "Failed to deleted students from lecture");
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
					Class.findOneAndDelete({_id: classDelete._id}, function(err, deletedClass) {
						if(err) {
							handleError(res, "Database error while deleting", "Failed to delete class");
						}
						else {
							if(!deletedClass) {
								console.log("Failed to delete class");
							}
							else {
								console.log("Successfully deleted class");
							}
						}
					});
				}
			}
		}
	});

	Professor.findOneAndDelete({profNID: req.params.id}, function(err, deleteProf) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete professor");
		}
		else {
			if(!deleteProf) {
				handleError(res, "Failed to find professor to delete", "Failed to delete professor");
			}
			else {
				console.log("Successfully deleted professor");
				res.status(201).json("Successfully deleted professor");
			}
		}
	});

});

// Update UUID Professor

// :id - "profNID"

// JSON
// uuid: "ble uuid"

app.post("/api/professors/updateUUID/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	console.log(req.body);
	Professor.findOneAndUpdate({"profNID": req.params.id}, {"bleUUID": req.body.uuid}, {new: true}, function(err, model){
		if(err) {
			handleError(res, "Database error while updating", "Failed to update professor uuid");
		}
		else {
			console.log(req.params.id);
			console.log(model);
			res.status(201).json("Successfully updated professor uuid");
		}
	});
});

// Update Professor (General)

// Please DO NOT update hasPaid, bleUUID, or profNID

// If you want to update a field, just add what you want to change in the json

// :id - "profNID"

// JSON
// name: "ricky"
// email: "rickyemail"
// password: "password"

app.post("/api/professors/updateProfessor/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	console.log(req.body);
	Professor.findOneAndUpdate({"profNID": req.params.id}, req.body, {new: true}, function(err, model){
		if(err) {
			handleError(res, "Database error while updating", "Failed to update professor");
		}
		else {
			console.log(req.params.id);
			console.log(model);
			res.status(201).json(model);
		}
	});
});

// Use Access Key

// :id - "profNID"

// JSON
// keyValue: "123456789"

app.post("/api/professors/useAccessKey/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	AccessKey.findOneAndUpdate({keyValue: req.body.keyValue}, {isUsed: true}, {new: true}, function(err, accessKey) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find access key");
		}
		else {
			console.log(req.params.id);
			console.log(accessKey);
			Professor.findOneAndUpdate({profNID: req.params.id}, {hasPaid: true}, {new: true}, function(err, prof) {
				if(err) {
					handleError(res, "Database error while updating", "Failed to update professor payment");
				}
				else {
					if(!prof) {
						handleError(res, "Failed to find professor to update", "Failed to update professor payment");
					}
					else {
						var uses = new Uses({
							key_id: accessKey._id,
							usedByProfNID: req.params.id
						});
						uses.save(function(err, used) {
							if(err) return handleError(res, "Failed to create uses", "Didn't save access key");
							else {
								console.log("Successfully created uses for access key");
								res.status(201).json("Successfully paid");
							}
						});
					}
				}
			});
		}
	});
});

// View All Professors

// For testing purposes

app.get("/api/professors/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Professor.find(function(err, professors) {
		if(err){
			handleError(res, err.message, "Couldn't get professors");
		}
		else {
			console.log("Found professors");
			res.status(201).json(professors);
		}
	});
});

// Create Class

// :id - "profNID"

// JSON
// course_id: "cop4331"
// name: "poop"
// start_time: "13:00"
// end_time: "14:50"
// reg_code: "abC13Fa"

app.post("/api/classes/create/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}

	// "class" is a reserved word in js
	var classy = new Class({
		courseID: req.body.course_id,
		className: req.body.name,
		createdByProfNID: req.params.id,
		startTime: req.body.start_time,
		endTime: req.body.end_time,
		regCode: genAlphaKey()
	});

	if(!req.body.course_id) {
		handleError(res, "Invalid user input", "Missing course id", 400);
	}
	else {
		classy.save(function(err, classy){
			if(err) return handleError(res, "Failed to save class", "Failed to create class");
			else {
				console.log("Class successfully created");
				res.status(201).json(classy);
			}
		});
	}

});

// View Classes (for Professor)

// :id - "profNID"

app.get("/api/classes/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Class.find({createdByProfNID: req.params.id}, function(err, profClasses) {
		if(err) {
			handleError(res, "Database error error while searching", "Failed get classes for professor");
		}
		else {
			console.log("Successfully got classes");
			res.status(201).json(profClasses);
		}
	});
});

// Delete Class

// :id - "_id of class"

app.post("/api/classes/delete/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	isIn.deleteMany({class_id: req.params.id}, function(err) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete students from class");
		}
		else {
			console.log("Successfully deleted all students from class");
		}
	});
	Lecture.find({class_id: req.params.id}, function(err, classLectures){
		if(err) {
			handleError(res, err.message, "Couldn't get lectures for class");
		}
		else {
			console.log("Found lectures for class");
			for(var i = 0; i < classLectures.length; i++) {
				Attended.deleteMany({lecture_id: classLectures[i]._id}, function(err) {
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
				handleError(res, "Failed to delete class", "Failed to delete class");
			}
			else {
				res.json("Successfully deleted class");
			}
		}
	});
});

// Update Class

// Please DO NOT update _id or createByProfNID

// If you want to update a field, just add what you want to change in the json

// :id - "_id of class"

// JSON
// courseID: "cop4331"
// className: "poop"
// startTime: "12:00"
// endTime: "13:50"
// reg_code: "acbk3j@!"

app.post("/api/classes/update/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	console.log(req.body);
	Class.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, model){
		if(err) {
			handleError(res, "Database error while updating", "Failed to update class");
		}
		else {
			console.log(req.params.id);
			console.log(model);
			res.status(201).json(model);
		}
	});
});

// Add (Student) To Class

// :id - "_id of class"
// JSON
// nid: "ab123456"
// reg_code: "jbsdfjkbasfdadfs"

app.post("/api/classes/addToClass/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}

	Student.findOne({studentNID: req.body.nid}, function(err, stud) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find student");
		}
		else {
			if(!stud) {
				handleError(res, "Failed to find student", "Failed to find student");
			}
			else {
				console.log("Found student");

				if(!req.body.nid) {
					handleError(res, "Invalid user input", "Missing nid parameter", 400);
				}
				else {
					if(!req.body.reg_code) {
						handleError(res, "Invalid user input", "Missing reg_code parameter", 400)
					}
					else {
						Class.findOne({regCode: req.body.reg_code}, function(err, classy) {
							if(err){
								handleError(res, "Database error", "Error with database")
							}
							else {
								if(!classy){
									handleError(res, "Class not found", "Invalid registration code")
								}
								else {
									var isin = new isIn({
										class_id: classy._id,
										studentNID: req.body.nid,
										studentUUID: stud.studentUUID
									});
									isin.save(function(err, isin){
										if(err) return handleError(res, "Failed to create isIn", "Failed to add student to class");
										else {
											console.log("isIn successfully created");
											res.status(201).json(isin);
										}
									});
								}
							}
						});
					}
				}
			}
		}
	});
});

// Remove Student (from Class)

// :id - "_id of class"
// JSON
// nid: "ab123456"

app.post("/api/classes/removeStudent/:id/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	isIn.findOneAndDelete({class_id:req.params.id, studentNID: req.body.nid}, function(err, deletedIsIn){
		if(err) {
			handleError(res, "Database error while deleting", "Failed to remove from class");
		}
		else{
			if(!deletedIsIn) {
				handleError(res, "Failed to delete isIn", "Failed to remove student from class");
			}
			else {
				console.log("Successfully removed from class");
				res.json("Successfully removed from class");
			}
		}
	});
});

// View Students (in Class)

// :id - "_id of class"

app.get("/api/classes/viewStudents/:id/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	isIn.find({class_id: req.params.id}, function(err, studentsForClass){
		if(err) {
			handleError(res, err.message, "Couldn't get students for this class");
		}
		else {
			console.log("Successfully got students for class");
			res.status(201).json(studentsForClass);
		}
	});
});

// *** Student API Routes ***

// Create Student

// JSON
// nid: "studentNID"
// name: "Joe Smoe"
// email: "email"
// uuid: "12345ab"

app.post("/api/students/createStudent/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Student.findOne({studentNID: req.body.nid}, function(err, stud){
		if(err) {
			handleError(res, "Database error while searching", "Failed to find student");
		}
		else {
			if(!stud) {
				var student = new Student({
					studentNID: req.body.nid,
			  		name: req.body.name,
			  		email: req.body.email,
			  		studentUUID: req.body.uuid
				});

				if(!req.body.nid || !req.body.name || !req.body.email) {
					handleError(res, "Invalid user input", "Missing input field", 400);
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
			}
			else {
				console.log("Student already exists");
				Student.findOne({studentNID: req.body.nid}, function(err,student){
					if(err){
						handleError(res, "Error retrieving student", "Student exists")
					}
					else {
						if(student.studentUUID && student.studentUUID == "-1"){
							console.log("Overriding student")

							Student.findOneAndUpdate({studentNID: req.body.nid}, {studentUUID:req.body.uuid}, {new:true},function (err, student){
								if(err){
									handleError(res, "Could not update", "Failed to update");
								}
								else{
									console.log(student);
									res.status(201).json("Success");
								}
							})
						}
						else {
							res.status(201).json("Student already exists");
						}
					}

				});

			}
		}
	});

});

// Update Student

// Please DO NOT update studentNID
// Student UUID Should only update if professor has allowed override, meaning UUID is set to -1

// If you want to update a field, just add what you want to change in the json

// :id - "studNID"

// JSON
// name: "joe noe"
// email: "joesemail"
// studentUUID: "15"

app.post("/api/students/updateStudent/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	console.log(req.body);

	// Check that the UUID is -1 first before updating student UUID. This means they were overridden by prof
	if(req.body.studentUUID)
	{
		Student.findOne({studentNID: req.params.id}, function(err, student){

		if (err) {
			handleError(res, "Database Error while searching", "Failed to find student");
		}

		else{
			console.log(student);
			console.log("UUID in body")
			if(student.studentUUID != '-1') {
				res.status(201).json("Cannot update");
			}


		}


		})
	}
	Student.findOneAndUpdate({studentNID: req.params.id}, req.body, {new: true}, function(err, stud) {
		if(err) {
			handleError(res, "Database error while updating", "Failed to update student");
		}
		else {
			console.log(req.params.id);
			console.log(stud);
			if(!stud) {
				res.status(201).json("Could not find student with that id!")
			}
			else{
			res.status(201).json(stud);
			}
		}
	});
});

// Delete Student

// :id - "studNID"

app.post("/api/students/deleteStudent/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
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
				handleError(res, "Failed to delete student", "Failed to delete student");
			}
			else {
				console.log("Successfully delete student");
				res.json("Successfully deleted student");
			}
		}
	});
});

// Override Student

// Allows professors to let students link account to a different device

//:id - "studentNID"

app.post("/api/students/override/:id/:key", function(req,res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}

	Student.findOneAndUpdate({studentNID: req.params.id}, {studentUUID: "-1"}, {new:true} ,function(err,student){
		if(err){
			handleError(res, "Error finding student to update", "Could not update student");
		}
		else{
			if(student){
				res.status(201).json("Success")
			}
			else {
				res.status(201).json("Could not find student");
			}
		}

	})



});

// View All Students

// For testing purposes

app.get("/api/students/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Student.find(function(err, students) {
		if(err) {
			handleError(res, err.message, "Couldn't get students");
		}
		else {
			res.status(201).json(students);
		}
	});
});

// View Classes (for Student)
// Gives only the _id of the classes

// :id - "studNID"

app.get("/api/students/viewClasses/:id/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	isIn.find({studentNID: req.params.id}, function(err, classesForStud){
		if(err) {
			handleError(res, err.message, "Couldn't get classes for this student");
		}
		else {
			res.status(201).json(classesForStud);
		}
	});
});

// (View) Attended Lecture(s) (for Student)
// Returns the dates they attended for a class

// :id - "studNID"
// :class_id - "_id of class"

app.get("/api/students/attendedLecture/:id/:class_id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Class.findOne({_id: req.params.class_id}, function(err, classy) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find class");
		}
		else {
			if(!classy) {
				res.json("Class doesn't exist");
			}
			else {
				console.log("Found class");
				Attended.find({studentNID: req.params.id}, function(err, attendeds) {
					if(err) {
						handleError(res, "Database error while searching", "Failed to find attendeds");
					}
					else {
						if(!attendeds) {
							res.json("Failed to find attendeds");
						}
						else {
							var lectured = new Array();
							Lecture.find({class_id: classy._id}, function(err, lec) {
								if(err) {
									handleError(res, "Database error while searching", "Failed to find lectures");
								}
								else {
									if(!lec) {
										console.log("not one of them");
									}
									else {
										for(var j = 0; j < attendeds.length; j++)
											for(var k = 0; k < lec.length; k++)
												if((lec[k]._id).equals(attendeds[j].lecture_id))
													lectured.push(lec[k].date);
										if(!lectured) {
											res.json("empty");
										}
										else {
											// this doesn't return anything if outside the query
											res.status(201).json(lectured);
										}
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

// Mark (Student) Here
// If they can see the prof uuid then they are at lecture within
// the class time, given that the prof uuid is generated new every lecture

// :id - "studUUID"
// JSON
// profUUID: "ab123456"

app.post("/api/students/markHere/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Professor.findOne({bleUUID: req.body.profUUID}, function(err, prof) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find prof");
		}
		else {
			if(!prof) {
				res.status(201).json("Failed to find prof");
			}
			else {
				console.log("Successfully found prof");
				Lecture.findOne({profUUID: req.body.profUUID}, function(err, lecture){
					if(err) {
						handleError(res, "Database error while searching", "Failed to find lecture");
					}
					else {
						if(!lecture) {
							res.json("Failed to find lecture");
						}
						else {
							console.log("Successfully found lecture");
							isIn.findOne({class_id: lecture.class_id, studentUUID: req.params.id}, function(err, isin) {
								if(err) {
									handleError(res, "Database error while searching", "Failed to find isin");
								}
								else {
									if(!isin) {
										res.json("Failed to find isin");
									}
									else {
										console.log("Successfully found isin");
										Attended.findOne({studentNID: isin.studentNID, lecture_id: lecture._id}, function(err, attendee) {
											if(err) {
												handleError(res, "Database error while searching", "Failed to find attended");
											}
											else {
												if(!attendee) {
													var attender = new Attended({
														studentNID: isin.studentNID,
														lecture_id: lecture._id
													});
													attender.save(function(err, attender) {
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
													console.log("Student already marked here");
													res.status(201).json("Student already marked here");
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

// Create Lecture
// One uniquely dated lecture for each class

// :id - "_id of class"
// :uuid - "profUUID"

app.post("/api/lectures/create/:id/:uuid/:key", function(req, res){
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Lecture.findOne({date: new Date().toLocaleString().split(",")[0], class_id: req.params.id}, function(err, foundLect) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find lecture");
		}
		else {
			if(!foundLect) {
				Professor.findOne({bleUUID: req.params.uuid}, function(err, prof){
					if(err) {
						handleError(res, "Database error while searching", "Failed to find prof");
					}
					else {
						if(!prof) {
							res.json("Failed to find prof");
						}
						else {
							var lecture = new Lecture({
								class_id: req.params.id,
								date: (new Date().toLocaleString().split(",")[0]),
								profUUID: req.params.uuid
							});
							if(!req.params.id || !req.params.uuid) {
								handleError(res, "Invalid user input", "Missing input field");
							}
							else {
								lecture.save(function(err, lecture){
									if(err) return handleError(res, "Failed to save lecture", "Didn't save lecture");
									else {
										console.log("Lecture successfully created");
										res.status(201).json(lecture);
									}
								});
							}
						}
					}
				});

			}
			else {
				console.log("Lecture already exists");
				res.status(201).json("Lecture already exists for today, please delete the lecture for today if you wish to overwrite the current attendance record");
			}
		}
	});
});

// Delete Lecture
// When a professor wants to redo the attendance for the day,
// they need to delete today's current lecture before they can
// create a new lecture on the mobile app

// :id - "_id of lecture"

app.post("/api/lectures/delete/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Attended.deleteMany({lecture_id: req.params.id}, function(err) {
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
				handleError(res, "Failed to delete lecture", "Failed to delete lecture");
			}
			else {
				res.json("Successfully deleted lecture");
			}
		}
	});
});

// View Lectures (for Class)

// :id - "_id of class"

app.get("/api/lectures/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Lecture.find({class_id: req.params.id}, function(err, classLectures) {
		if(err) {
			handleError(res, err.message, "Couldn't get lectures for class");
		}
		else {
			res.status(201).json(classLectures);
		}
	});
});

// View Attendance (for Lecture)

// :id - "_id of lecture"

app.get("/api/lectures/viewAttendance/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	Lecture.findOne({_id: req.params.id}, function(err, lecture) {
		if(err) {
			handleError(res, "Database error while searching", "Failed to find lecture");
		}
		else {
			Attended.find({lecture_id: lecture._id}, function(err, listAttendeds) {
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

// *** Access Key API Routes ***

// To generate access keys

let genKey = function() {
	var retStr = "";
	for(var i = 0; i < 16; i++) {
		var c = Math.floor(Math.random() * 10);
		retStr += c;
	}
	return retStr;
};

let genAlphaKey = function() {
	var retStr = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i = 0; i < 6; i++) {
		var c = possible.charAt(Math.floor(Math.random() * possible.length));
		retStr += c;
	}
	return retStr;
};

// Generate Access Key

app.post("/api/accessKeys/generate/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	var accesskey = new AccessKey({
		keyValue: genKey(),
		isUsed: false
	});
	accesskey.save(function(err, accesskey) {
		if(err) return handleError(res, "Failed to create access key", "Didn't save access key");
		else {
			console.log("Successfully generated access key");
			res.status(201).json(accesskey);
		}
	});
});

// Delete Access Key

// For testing purposes

// :id - "_id of access key"

app.post("/api/accessKeys/delete/:id/:key", function(req, res) {
	if(req.params.key != process.env.APIKEY) {
		handleError(res, "Attempted access with invalid api key", "Unauthorized access", 403);
		return;
	}
	AccessKey.findOneAndDelete({_id: req.params.id}, function(err, deleteAccessKey) {
		if(err) {
			handleError(res, "Database error while deleting", "Failed to delete access key");
		}
		else {
			if(!deleteAccessKey) {
				handleError(res, "Failed to delete access key", "Failed to delete access key");
			}
			else {
				res.json("Successfully deleted access key");
			}
		}
	});
});
