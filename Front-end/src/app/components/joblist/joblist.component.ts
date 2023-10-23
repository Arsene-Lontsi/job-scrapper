import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent {
  constructor(protected service: SharedService,
    private router: Router){}


  navigateToDetail(job:Job){
    this.router.navigateByUrl('job');
    this.service.jobDetail = job;
  }

}
