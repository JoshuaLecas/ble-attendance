import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() 
  {
  }

  showPassword() 
  {
    var x = (<HTMLInputElement>document.getElementById("password"));
    
    if (x.type === "password") 
    {
       x.type = "text";
    } 
    else 
    {
       x.type = "password";
    }
  }

}
