import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';


const APIUrl = "http://localhost:8000/api";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  static authEmitter = new EventEmitter<boolean>();
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
  forgotPassForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
  });
  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  signup(signupData:any){
    return this.http.post(APIUrl+"/signup",signupData,);
  }
  login(loginData:any){
    return this.http.post(APIUrl+"/login", loginData, {withCredentials:true})
  }
  getUser(){
    return this.http.get(APIUrl+"/user");
  }
  refresh(){
    return this.http.post(APIUrl+"/refresh", {}, {withCredentials:true})
  }
  logout(){
    return this.http.post(APIUrl+"/logout", {}, {withCredentials:true})
  }
  forgot(data:any){
    return this.http.post(APIUrl+'/forgotpass', data)
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
