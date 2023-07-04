import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import { Router } from '@angular/router';

const APIUrl = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static authEmitter = new EventEmitter<boolean>();
  accessToken = '';
  searchKey="";
  jobs!: Job[];
  jobDetail!:Job;
  constructor(
    private http: HttpClient,
    protected dialog: MatDialog,
    private router: Router) { }

  signupForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  forgotPassForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
  });
  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  signup(signupData:any){
    return this.http.post(APIUrl+"/auth/signup",signupData,);
  }
  login(loginData:any){
    return this.http.post(APIUrl+"/auth/login", loginData, {withCredentials:true})
  }
  getUser(){
    return this.http.get(APIUrl+"/auth/user");
  }
  refresh(){
    return this.http.post(APIUrl+"/auth/refresh", {}, {withCredentials:true})
  }
  logout(){
    return this.http.post(APIUrl+"/auth/logout", {}, {withCredentials:true})
  }
  forgot(data:any){
    return this.http.post(APIUrl+'/auth/forgotpass', data)
  }
  searchJobs(){
    this.http.get<Job[]>(APIUrl+"/jobs?search="+this.searchKey).subscribe({
      next: (jobs)=>{
        this.jobs = jobs;
        console.log("The activated route is:" ,this.router.url)
        console.log(jobs);
      },
      error: (error)=>{
        this.router.navigateByUrl('not-found');
      }
    })
    this.router.navigateByUrl('jobs');
  }
  config: MatDialogConfig = {
    width: '30%',
    autoFocus: false,
  };
  openLoginDialog() {
    this.dialog.open(LoginComponent,this.config);
  }
  openSignupDialog() {
    this.dialog.open(SignupComponent,this.config);
  }
  openForgotPass(){
    this.dialog.open(ForgotPasswordComponent, this.config)
  }
}
