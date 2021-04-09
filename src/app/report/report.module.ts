import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReportModalComponent } from './components/report-modal/report-modal.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportPage } from './report.page';

import { ReportPageRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReportPage }]),
    ReportPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  declarations: [ReportPage, ReportCardComponent, ReportModalComponent],
  providers: [
    Geolocation
  ]
})
export class ReportPageModule { }
