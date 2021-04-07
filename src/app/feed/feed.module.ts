import { FeedModalComponent } from './components/feed-modal/feed-modal.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedPage } from './feed.page';
import { FeedPageRoutingModule } from './feed-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeedPageRoutingModule
  ],
  declarations: [FeedPage, FeedCardComponent, FeedModalComponent]
})
export class FeedPageModule { }
