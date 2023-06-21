import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    ){}
  hide=true

  onSubmit(){
    console.log(this.service.loginForm.value);
    this.service.login(this.service.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      this.service.accessToken = res.token;
      this.dialogRef.close()
    })
  }
  denySubmit(){
    console.log("submit denied");
    console.log("")
  }
}
