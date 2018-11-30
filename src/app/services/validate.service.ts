import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.fname == undefined || user.email == undefined || user.lname == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }
  validateAdd(contact){
    if(contact.name == undefined || contact.email == undefined || contact.phone == undefined || contact.address == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateLogin(user){
    if(user.email == undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
