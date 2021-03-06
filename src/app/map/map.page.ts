import { ReportType } from './../shared/models/report/report-type';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import { Environment, GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { mapStyle } from './map-style';
import { ReportService } from '../shared/services/report.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ReportModel } from '../shared/models/report/report.model';
import * as moment from 'moment';
import {FeedModalComponent} from '../feed/components/feed-modal/feed-modal.component';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  map: GoogleMap;

  ReportType = ReportType;
  selectedReportType: ReportType;

  filter(reportType: ReportType) {
    this.selectedReportType = reportType;
    this.generateMarkers();
  }

  constructor(private platform: Platform,
              private reportService: ReportService,
              private geolocation: Geolocation,
              private modalController: ModalController
  ) {
    moment.locale('pt-BR');
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyD_RA628bGTIXcJ9WX5jjGjFelHEko3QeI',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyD_RA628bGTIXcJ9WX5jjGjFelHEko3QeI'
    });


  }

  async ngOnInit() {
    await this.platform.ready();
    await this.setupCamera();
  }

  setupCamera() {
    this.geolocation.getCurrentPosition().then(location => {

      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          }, zoom: 18, tilt: 30,
        },
        styles: mapStyle,
        preferences: { zoom: { minZoom: 6, maxZoom: 20 } }, controls: {
          myLocation: true,
          myLocationButton: true
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);
      this.generateMarkers();
    });
  }

  generateMarkers() {
    this.reportService.getReports(this.selectedReportType).subscribe((reports: ReportModel[]) => {
      this.map.clear().then(() => {
        reports.map(report => {
          return {
            report,
            title: '',
            icon: {
              url: report.icon,
              size: {
                width: 45,
                height: 45
              }
            },
            snippet: `
                <div class="marker-container">
                  <img src="${report.photo}">
                  <h4 class="text-uppercase">${report.title}</h4>
                  <small class="text-uppercase">Status</small>
                  <label style="font-size: 15px; padding: 10px">${report.status}</label>
                  <small>${moment(report.createdAt).format('LLL')}
                </div>`,
            animation: 'DROP',
            position: {
              lat: report.location.latitude,
              lng: report.location.longitude
            }
          };
        }).forEach(markerReport => {
          const createdMarker = this.map.addMarkerSync(markerReport);
          createdMarker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
            this.openReport(markerReport.report);
          });
        });
      });
    });
  }

  async openReport(report: ReportModel) {
    const modal = await this.modalController.create({
      component: FeedModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        report
      }
    });

    return await modal.present();
  }

}
