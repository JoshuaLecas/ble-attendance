import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-profdash',
  templateUrl: './profdash.component.html',
  styleUrls: ['./profdash.component.css','../content/modal.less']
})
export class ProfdashComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService, private modalService: ModalService) { }


  user : Object;
  user_id: String;

  courseID: String;
  className: String;
  startTime: String;
  endTime: String;

  ngOnInit() {
  //  if (sessionStorage.length == 0){
  //    this.router.navigate(['/home']);
  //  }
  //  this.pageLoad();
  }

  pageLoad(){
    var temp = sessionStorage.getItem('user');
    this.user = JSON.parse(temp);
    this.authService.storeUser(this.user);
    this.user_id = this.user['id'];
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
    this.className = undefined;
    this.courseID = undefined;
    this.startTime = undefined;
    this.endTime = undefined;
  }
  onAddClassButton(){


  }

}
