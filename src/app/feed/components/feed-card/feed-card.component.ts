import { Report } from './../../../report/models/report';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

  openReport(){
    console.log(this.report);
  }

}
