import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit
{

  constructor(private router: Router, public authService: AuthService) { }

  profNID: String;
  name: String;
  password: String;
  email: String;

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

  onSubmit(){
    
    const user = {
      profNID: this.profNID,
      name: this.name,
      password: this.password,
      email: this.email
    };
    this.authService.registerUser(user).subscribe( data => {
      this.router.navigate(['/login'])

    }, err =>{
    alert('Oh no! Something went wrong. Please try again!');
    this.router.navigate(['/register']);
    });

  }

}
