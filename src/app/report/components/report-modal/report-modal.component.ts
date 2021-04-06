import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Report } from '../../models/report';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @Input() report: Report;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
