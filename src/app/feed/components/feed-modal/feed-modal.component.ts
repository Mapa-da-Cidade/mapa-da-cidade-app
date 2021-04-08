import { ReportModel } from '../../../shared/models/report/report.model';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feed-modal',
  templateUrl: './feed-modal.component.html',
  styleUrls: ['./feed-modal.component.css']
})
export class FeedModalComponent implements OnInit {

  @Input() report: any;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }



}
