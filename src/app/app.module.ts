import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfdashComponent } from './profdash/profdash.component';

import {AuthService} from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { FilterPipe } from './services/filter.pipe';


const appRoutes: Routes =[
  { path:'', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path:'profdash', component: ProfdashComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfdashComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
