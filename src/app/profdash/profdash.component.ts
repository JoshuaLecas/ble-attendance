import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profdash',
  templateUrl: './profdash.component.html',
  styleUrls: ['./profdash.component.css']
})
export class ProfdashComponent implements OnInit {

  constructor(private router: Router, public authService:AuthService) { }


  user : Object;
  user_id: String;

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

}
