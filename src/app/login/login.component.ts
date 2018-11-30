import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  key: any;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(){
    var temp = this.authService.getKey();
    this.key = temp;
    alert(this.key);
    alert(this.key['key']);
    alert(this.key.key);
    alert(temp);
    alert(temp['key']);
    this.authService.storeKey(this.key);

  }

  showPassword() {
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
      email: this.email,
      password : this.password
    };

    this.authService.loginUser(user).subscribe( data => {
      if (data == 'Failed') {
        alert('User not found, please try again');
        this.router.navigate(['']);
      }
      else {
        console.log(data);
        const user = data;
        this.authService.storeUser(user)
        this.router.navigate(['/profdash'])
      }

    }, err =>{
    alert('Oh no! Something went wrong. Please try again!');
    this.router.navigate(['/home']);
  });
  }



}
