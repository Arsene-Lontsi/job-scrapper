import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  success!:boolean;
  constructor(
    protected service: SharedService,
    public dialogRef: MatDialogRef<LoginComponent>,
    ){}
  hide=true;

  ngOnInit(): void{
    console.log("Success is :", this.success);
  }
  setStyle(){
    let style;
    if(this.success==true){
      style = {'background-color':'rgba(125, 204, 151,0.2)', 'display':'block'}
    }else if (this.success==false){
      style = {'background-color':'rgba(197, 110, 110,0.2);', 'display':'block'}
    }
    return style;
  }
  onSubmit(){
    console.log(this.service.loginForm.value);
    this.service.forgot(this.service.forgotPassForm.value).subscribe({
      next: ()=>{
        this.success=true;
        console.log("success");
      },
      error: ()=>{
        this.success=false;
        console.log("failure");
      }
    })
  }
  denySubmit(){

  }
}
