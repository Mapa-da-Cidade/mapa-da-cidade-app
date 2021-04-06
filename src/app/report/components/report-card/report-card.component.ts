import { Report } from './../../models/report';
import { ReportModalComponent } from './../report-modal/report-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input() report: Report;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openReportModal() {
    const modal = await this.modalController.create({
      component: ReportModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'report': this.report,
      }
    });
    return await modal.present();
  }

}
