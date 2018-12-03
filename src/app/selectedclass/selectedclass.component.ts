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



  getCourseList(){
    this.authService.getCourses().subscribe(data =>{
    this.courseList = data;
    })
  }
}
