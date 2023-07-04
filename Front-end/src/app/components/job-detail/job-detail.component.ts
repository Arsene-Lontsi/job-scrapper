import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute,
    protected service:SharedService){}
  ngOnInit(): void {
    console.log(this.service.jobDetail);
  }
}
