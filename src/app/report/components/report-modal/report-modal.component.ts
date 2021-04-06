import { PhotoService } from './../../../shared/services/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Report } from '../../models/report';
import { AngularFirestore, } from '@angular/fire/firestore';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @Input() report: Report;

  form: FormGroup;

  constructor(
    public modalController: ModalController,
    public firestore: AngularFirestore,
    public formBuilder: FormBuilder,
    public photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      type: [this.report.type, Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

  captureImage() {
    this.photoService.takePhoto().then(response => {
      this.form.controls.photo.setValue(response);
    });
  }

  addReport() {
    console.log(this.form.value)
    this.uploadFile(this.form.value.photo.webPath)
    // const reports = this.firestore.collection('reports');
    // reports.add({ teste: 'sera que foi?' });
  }

  uploadFile(path) {
    // const filePath = path;
    // const task = this.storage.upload(filePath, null);
  }

}
