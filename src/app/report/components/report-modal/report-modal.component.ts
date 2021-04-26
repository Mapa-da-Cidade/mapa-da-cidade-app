import { Security } from './../../../shared/security/token.security';
import { LoadingService } from './../../../shared/services/loading.service';
import { ReportLocation } from './../../../shared/models/report/report-location';
import { ReportModel } from './../../../shared/models/report/report.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { PhotoService } from './../../../shared/services/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @Input() report: ReportModel;

  form: FormGroup;
  public task: AngularFireUploadTask;
  public progress: any;

  constructor(
    public modalController: ModalController,
    public firestore: AngularFirestore,
    public formBuilder: FormBuilder,
    public photoService: PhotoService,
    private storage: AngularFireStorage,
    private geolocation: Geolocation,
    private loadingService: LoadingService
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

  async addReport() {
    await this.loadingService.present();
    const location = await this.geolocation.getCurrentPosition();
    const photo = await this.uploadFile(this.form.value.photo.base64String)

    this.report.addData(
      new ReportLocation(location.coords.latitude, location.coords.longitude),
      photo,
      Security.getUser().id
    )

    const reports = this.firestore.collection('reports');
    reports.add(JSON.parse(JSON.stringify(this.report)));
    this.loadingService.dismiss();
    this.modalController.dismiss();
  }

  async uploadFile(path) {
    const filePath = `post_${new Date().getTime()}.jpg`;

    this.task = this.storage.ref(filePath).putString(path, 'data_url');
    this.progress = this.task.percentageChanges();

    const data = await this.task;
    const ref = this.storage.ref(data.metadata.fullPath);
    return ref.getDownloadURL().toPromise();
  }

}
