import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReportModalComponent } from './components/report-modal/report-modal.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportPage } from './report.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReportPageRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ReportPage }]),
    ReportPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  declarations: [ReportPage, ReportCardComponent, ReportModalComponent]
})
export class ReportPageModule { }
