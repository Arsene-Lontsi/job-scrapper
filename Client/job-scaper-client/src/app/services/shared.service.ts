import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';


const APIUrl = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  accessToken = '';
  constructor(
    private http: HttpClient,
    protected dialog: MatDialog) { }
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


  login(loginData:any){
    return this.http.post(APIUrl+"/login",loginData, {withCredentials:true})
  }
  signup(signupData:any){
    return this.http.post(APIUrl+"/signup",signupData);
  }
  getUser(){
    return this.http.get(APIUrl+"/user");
  }






  config: MatDialogConfig = {
    width: '35%',
    autoFocus: false,
  };
  openLoginDialog() {
    this.dialog.open(LoginComponent,this.config);
  }
  openSignupDialog() {
    this.dialog.open(SignupComponent,this.config);
  }
}
