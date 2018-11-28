import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { Class } from '../services/class';

@Component({
  selector: 'app-profdash',
  templateUrl: './profdash.component.html',
  styleUrls: ['./profdash.component.css','../content/modal.less']
})
export class ProfdashComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService, private modalService: ModalService) { }


  user : Object;
  user_id: String;

  course: Class;
  courseList: any;
  course_id: String;
  class_name: String;
  start_time: String;
  end_time: String;

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

  onLogOutButton(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
  openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
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

}
