import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  apiKey: any;
 // private baseUri:string="http://localhost:8080/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Store user info in local storage
  storeUser(user){
    sessionStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  storeKey(key){
    sessionStorage.setItem('key', JSON.stringify(key));
    this.apiKey = key;
    alert(this.apiKey.ket);
    alert(this.apiKey['ket']);
    alert(this.apiKey);
  }


  // Endpoints for logging in and registering user
  getKey(){
    return this.http.post('/api/demo', {headers:this.headers});
}

  registerUser(user){
    return this.http.post('/api/professors/createProfessor/' + this.apiKey.ket, user, {headers:this.headers});
  }

  loginUser(user){
    return this.http.post('/api/professors/login/'+this.apiKey.ket, user, {headers:this.headers});
  }

  createClass(course){
    return this.http.post('/api/classes/create/'+this.user.profNID+'/'+this.apiKey.ket, course, {headers:this.headers});
  }

//   // Endpoints for interacting with Contacts
  getCourses(){
    return this.http.get('/api/classes/'+this.user.profNID+'/'+this.apiKey.ket, {headers:this.headers});
}

  getLectures(course){
  return this.http.get('/api/lectures/'+course._id+'/'+this.apiKey.ket, {headers:this.headers});
}
//
//   addContact(contact: Contact){
//     return this.http.post('/api/contacts/create/'+this.user.id, contact, {headers:this.headers});
//   }
//
//   updateContact(contact: Contact){
//     return this.http.post('/api/contacts/update/'+contact._id, contact, {headers:this.headers});
//   }
//
//   deleteContact(contact: Contact){
//     return this.http.post('/api/contacts/delete/'+contact._id, {headers:this.headers});
//   }
//
//   downloadContact(contact: Contact){
// 	return this.http.post('/api/contacts/download/'+contact._id, contact, {headers:this.headers});
//   }
 }
