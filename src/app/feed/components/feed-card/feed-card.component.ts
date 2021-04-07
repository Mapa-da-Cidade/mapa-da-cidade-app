import { FeedModalComponent } from './../feed-modal/feed-modal.component';
import { Report } from './../../../report/models/report';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() report: Report;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openReport() {
    const modal = await this.modalController.create({
      component: FeedModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'report': this.report
      }
    });

    return await modal.present();
  }


}
