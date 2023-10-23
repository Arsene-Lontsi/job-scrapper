import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    protected service: SharedService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private router:Router
    ){}
  hide=true

  onSubmit(){
    this.service.login(this.service.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      this.service.accessToken = res.token;
      SharedService.authEmitter.emit(true);
      this.dialogRef.close()
      this.router.navigateByUrl('home')
    })
  }
  denySubmit(){
    console.log("submit denied");
  }
  openForgotPass(){
    this.dialogRef.close()
    this.service.openForgotPass();
  }
}
