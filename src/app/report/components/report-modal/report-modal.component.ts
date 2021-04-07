import { AngularFirestore } from '@angular/fire/firestore';
import { PhotoService } from './../../../shared/services/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Report } from '../../models/report';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @Input() report: Report;

  form: FormGroup;
  public task: AngularFireUploadTask;
  public progress: any;

  constructor(
    public modalController: ModalController,
    public firestore: AngularFirestore,
    public formBuilder: FormBuilder,
    public photoService: PhotoService,
    private storage: AngularFireStorage
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
    this.uploadFile(this.form.value.photo.base64String)
  }

  uploadFile(path) {
    const filePath = `post_${new Date().getTime()}.jpg`;

    this.task = this.storage.ref(filePath).putString(path, 'data_url');
    this.progress = this.task.percentageChanges();

    this.task.then(
      (data) => {
        const ref = this.storage.ref(data.metadata.fullPath);
        ref.getDownloadURL().subscribe(
          (imgUrl) => {
            const reports = this.firestore.collection('reports');
            const report = {
              ...this.form.value,
              photo: imgUrl
            }
            reports.add(report);
          });
      });
  }

}
