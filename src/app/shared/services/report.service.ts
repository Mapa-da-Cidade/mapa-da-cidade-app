import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private db: AngularFirestore) { }


  getReports(): Observable<any> {
    return this.db.collection('reports').valueChanges();
  }
}
