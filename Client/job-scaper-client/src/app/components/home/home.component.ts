import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = '';
  constructor(protected service: SharedService){}

  ngOnInit(): void{
    this.service.getUser().subscribe({
      next: res =>{
        console.log(res);
        SharedService.authEmitter.emit(true);
      },
      error: err=>{
        console.log(err);
        SharedService.authEmitter.emit(false);
      }
    })
  }
}
