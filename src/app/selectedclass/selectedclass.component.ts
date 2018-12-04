import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Class } from '../services/class';

@Component({
  selector: 'app-selectedclass',
  templateUrl: './selectedclass.component.html',
  styleUrls: ['./selectedclass.component.css']
})
export class SelectedclassComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService) { }

  user : Object;
  user_id: String;

  course: Class;
  courseList: any;

  selectedCourse: Class;

  studentList: any;

  nid: String;
  reg_code: String;

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

  getStudentList(){
  this.studentList = this.authService.getStudentList();

  }

  getCourseList(){
    this.authService.getCourses().subscribe(data =>{
    this.courseList = data;
    })
  }

  onAddToClassButton(){
    const student = {
      nid: this.nid,
      reg_code: this.reg_code
    };
    this.authService.addStudentToClass(student).subscribe( data => {
    }, err =>{
    alert('Oh no! Something went wrong. Please try again!');
    });
    this.getStudentList();
    this.nid = undefined;
    this.reg_code = undefined;

  }
}
