import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Class } from '../services/class';
import { FormsModule } from '@angular/forms';

import { Lecture } from '../services/lecture';
@Component({
  selector: 'app-profdash',
  templateUrl: './profdash.component.html',
  styleUrls: ['./profdash.component.css']
})
export class ProfdashComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService) { }

  inputString: string;

  user : Object;
  user_id: String;

  course: Class;
  courseList: any;
  course_id: String;
  class_name: String;
  start_time: String;
  end_time: String;

  lecture: Lecture;
  lectureList: any;

  studentList: any;
  attendedList: any;
  selectedCourse: Class;

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
    this.getCourseList();
    this.getCourseList();
  }

  hack(val){
    return val;
  }

  onLogOutButton(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  clearFields(){
    this.class_name = undefined;
    this.course_id = undefined;
    this.start_time = undefined;
    this.end_time = undefined;
  }
  onAddClassButton(){

    const course = {
      course_id: this.course_id,
      class_name: this.class_name,
      start_time: this.start_time,
      end_time: this.end_time
    };
    this.authService.createClass(course).subscribe( data => {
    this.clearFields();
    }, err =>{
    alert('Oh no! Something went wrong. Please try again!');
    });
    this.getCourseList();
    this.getCourseList();

  }

  getCourseList(){
    this.authService.getCourses().subscribe(data =>{
    this.courseList = data;
    })
  }

  getLectureList(selectedCourse){
    this.authService.getLectures(selectedCourse).subscribe(data =>{
    this.lectureList = data;
    })
  }

  courseClicked(course){
    this.selectedCourse = course;
    this.getLectureList(course);
    this.getLectureList(course);
  }

  onDeleteButton(course){
    this.authService.deleteClass(course).subscribe(data=>{
      // alert('Deleted a contact');
    }, err =>{

    });
    this.getCourseList();
    this.getCourseList();
  }

  onClassSelectedButton(course){
    this.authService.getStudentsForClass(course).subscribe(data =>{
    this.studentList = data;
    this.authService.setStudents(this.studentList);
    this.router.navigate(['/selectedclass']);
    })
  }
  onLectureSelectedButton(lecture){
    this.authService.getAttendedStudentsFromLecture(lecture).subscribe(data =>{
    this.attendedList = data;
    this.authService.setAttendeds(this.attendedList);
    this.router.navigate(['/selectedlecture']);
    })
  }
}
