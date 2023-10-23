import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isAuthenticated = false;
  user:any;
  constructor(
    public dialog: MatDialog,
    protected service: SharedService,
    private router:Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void{
    this.service.getUser().subscribe({
      next: res=>{
        this.isAuthenticated =true
        console.log("The user is :",res);
        this.service.user=res;
      },
      error: err =>{
        console.log(err)
      }
    })
    console.log("authentication")

  }
  logout(){
    this.service.logout().subscribe(()=>{
      this.service.accessToken = '';
      SharedService.authEmitter.emit(false);
      this.router.navigateByUrl('home')
    })
  }
}
