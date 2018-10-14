import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit 
{

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
