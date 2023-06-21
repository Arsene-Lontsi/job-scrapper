import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public dialog: MatDialog,
    protected service: SharedService
    ) {}
}
