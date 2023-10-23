import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    protected service: SharedService,
    public dialogRef: MatDialogRef<SignupComponent>,
    ){}
  hide =true;
  passwordmatch = true;
  onSubmit(){
    console.log(this.service.signupForm.value)
    this.service.signup(this.service.signupForm.value).subscribe(res=>{
      console.log(res);
      this.dialogRef.close();
      this.service.signupForm.reset();
      this.service.openLoginDialog()
    })
  }
  denySubmit(){
    console.log("submit denied");
    console.log(this.service.signupForm.value)
    console.log(this.passwordmatch);
  }
  confirmPassword() {
    console.log("Text changing")
    if(this.service.signupForm.controls.password_confirm.value!=''){
      this.passwordmatch = this.service.signupForm.controls.password_confirm.value == this.service.signupForm.controls.password.value;
    }
  }
}
