import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  apiKey: any;
  course: any;
  studentsInClass: any;

  attendedStudents: any;

 // private baseUri:string="http://localhost:8080/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Store user info in local storage
  storeUser(user){
    sessionStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }



  // Endpoints for logging in and registering user

  registerUser(user){
    return this.http.post('/api/professors/createProfessor/', user, {headers:this.headers});
  }

  loginUser(user){
    return this.http.post('/api/professors/login/', user, {headers:this.headers});
  }

  createClass(course){
    return this.http.post('/api/classes/create/'+this.user.profNID, course, {headers:this.headers});
  }

//   // Endpoints for interacting with Contacts
  getCourses(){
    return this.http.get('/api/classes/'+this.user.profNID, {headers:this.headers});
}

  getLectures(course){
  return this.http.get('/api/lectures/'+course._id, {headers:this.headers});
}

  deleteClass(course){
    return this.http.post('/api/classes/delete/'+course._id, {headers:this.headers});
  }

  getStudents(){
    return this.http.get('/api/students', {headers:this.headers});
  }

  getClassesForStudent(student){
    return this.http.get('/api/students/viewClasses/'+student.studentNID, {headers: this.headers});
  }

  getStudentsForClass(course){
    this.course = course;
    return this.http.get('/api/classes/viewStudents/'+course._id, {headers:this.headers});
  }

  setStudents(studentList){
    this.studentsInClass = studentList;
  }

  getStudentList(){
    return this.studentsInClass;
  }

  addStudentToClass(student){
    return this.http.post('/api/classes/addToClass', student, {headers: this.headers});
  }

  setAttendeds(attendedStudents){
    this.attendedStudents = attendedStudents;
  }

  getAttendeds(){
    return this.attendedStudents;
  }

  getAttendedStudentsFromLecture(lecture){
    return this.http.get('/api/lectures/viewAttendance/'+lecture._id, {headers: this.headers});
  }

//
//   addContact(contact: Contact){
//     return this.http.post('/api/contacts/create/'+this.user.id, contact, {headers:this.headers});
//   }
//
//   updateContact(contact: Contact){
//     return this.http.post('/api/contacts/update/'+contact._id, contact, {headers:this.headers});
//   }
//
//   deleteContact(contact: Contact){
//     return this.http.post('/api/contacts/delete/'+contact._id, {headers:this.headers});
//   }
//
//   downloadContact(contact: Contact){
// 	return this.http.post('/api/contacts/download/'+contact._id, contact, {headers:this.headers});
//   }
 }
