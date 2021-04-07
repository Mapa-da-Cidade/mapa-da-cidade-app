import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage implements OnInit {

  reports: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.db.collection('reports').valueChanges().subscribe((data) => {
      this.reports = data;
    });
  }

}
