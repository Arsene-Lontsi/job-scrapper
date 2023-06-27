import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  constructor(
    protected service: SharedService,
    public dialogRef: MatDialogRef<ResetComponent>,
    ){}
  hide =true;
  passwordmatch = true;
  onSubmit(){
    this.service.signup(this.service.signupForm.value).subscribe(res=>{
      // console.log(res);
      this.dialogRef.close();
      this.service.signupForm.reset();
      this.service.openLoginDialog()
    })
  }
  denySubmit(){
    console.log("submit denied");
    console.log(this.passwordmatch);
  }
  confirmPassword() {
    console.log("Text changing")
    if(this.service.resetForm.controls.password_confirm.value!=''){
      this.passwordmatch = this.service.resetForm.controls.password_confirm.value == this.service.resetForm.controls.password.value;
    }
  }
}
