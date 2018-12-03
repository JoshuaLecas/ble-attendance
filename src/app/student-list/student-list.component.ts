import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Student } from '../services/student';
import { Class } from '../services/class';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService) { }

  user : Object;
  user_id: String;

  student: Student;
  studentList: any;

  course: Class;
  courseList: any;

  selectedStudent: Student;

  ngOnInit() {
  //  if (sessionStorage.length == 0){
  //    this.router.navigate(['/home']);
  //  }
    this.pageLoad();
  }

  pageLoad(){
    var temp = sessionStorage.getItem('user');
    this.user = JSON.parse(temp);
    this.authService.storeUser(this.user);
    this.user_id = this.user['id'];
    this.getStudentList();
    this.getStudentList();
  }

  onLogOutButton(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  studentClicked(student){
    this.selectedStudent = student;
    this.getClassList(student);
    this.getClassList(student);
  }


  getClassList(student){
      this.authService.getClassesForStudent(student).subscribe(data =>{
      this.courseList = data;
    })
  }
  getStudentList(){
    this.authService.getStudents().subscribe(data =>{
    this.studentList = data;
    })
  }
}
