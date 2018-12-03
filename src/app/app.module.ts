import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ProfdashComponent } from './profdash/profdash.component';

import {AuthService} from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { FilterPipe } from './services/filter.pipe';

import { AddClassComponent } from './add-class/add-class.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SelectedlectureComponent } from './selectedlecture/selectedlecture.component';
import { SelectedclassComponent } from './selectedclass/selectedclass.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profdash', component: ProfdashComponent},
  { path: 'addclass', component: AddClassComponent},
  { path: 'selectedclass', component: SelectedclassComponent},
  { path: 'selectedlecture', component: SelectedlectureComponent},
  { path: 'students', component: StudentListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfdashComponent,
    FilterPipe,
    HomeComponent,
    Navbar2Component,
    AddClassComponent,
    StudentListComponent,
    SelectedlectureComponent,
    SelectedclassComponent
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
