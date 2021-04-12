import { ReportType } from './../models/report/report-type';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private db: AngularFirestore) { }


  getReports(reportType: ReportType = null): Observable<any> {
    return this.db.collection('reports', ref => reportType ? ref.where('type', '==', reportType) : ref).valueChanges();
  }
}
