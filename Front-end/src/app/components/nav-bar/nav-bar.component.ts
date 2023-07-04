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
  constructor(
    public dialog: MatDialog,
    protected service: SharedService,
    private router:Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void{
    SharedService.authEmitter.subscribe(authenticated=>{
      this.isAuthenticated = authenticated;
    })
  }
  logout(){
    this.service.logout().subscribe(()=>{
      this.service.accessToken = '';
      SharedService.authEmitter.emit(false);
    })
  }
}
