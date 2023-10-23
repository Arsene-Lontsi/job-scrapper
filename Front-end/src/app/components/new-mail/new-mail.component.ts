import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.css']
})
export class NewMailComponent {
  @Inject(MAT_DIALOG_DATA) data: any;

  constructor(
    protected service:SharedService,
  ){}

  ngOnInit() {
    console.log("The email is")
    console.log(this.data); // { name: 'John Doe', age: 30 }
  }
  // onSubmit(){
  //   console.log("Submiting")
  //   console.log(this.service.mailForm.value)
  //   this.service.sendmail(this.service.mailForm.value).subscribe({
  //     next:res=>{
  //       console.log("The result is :",res)
  //     },
  //     error: err=>{
  //       console.log("The error is : ",err)
  //     }
  //   })
  // }
  denySubmit(){
    console.log("denying")
  }
}
