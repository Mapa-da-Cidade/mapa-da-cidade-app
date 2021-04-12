import { Component, OnInit } from '@angular/core';
import { ReportService } from '../shared/services/report.service';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage implements OnInit {

  reports: any[] = [];
  filter: string = '';

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.reportService.getReports().subscribe(reports => {
      this.reports = reports;
    });
  }


}
