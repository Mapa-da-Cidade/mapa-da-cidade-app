import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Report } from '../../models/report';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @Input() report: Report;

  constructor(
    public modalController: ModalController,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  addReport() {
    const reports = this.firestore.collection('reports');
    reports.add({ teste: 'sera que foi?' });
  }

}
