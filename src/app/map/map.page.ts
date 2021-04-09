import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMapOptions, GoogleMaps } from '@ionic-native/google-maps';
import { ReportModel } from '../shared/models/report/report.model';
import { ReportType } from '../shared/models/report/report-type';
import { ReportStatus } from '../shared/models/report/report-status';
import { ReportLocation } from '../shared/models/report/report-location';
import { getMarkerColorByType } from './marker';
import { mapStyle } from './map-style';
import { ReportService } from '../shared/services/report.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  map: GoogleMap;

  constructor(private platform: Platform, private reportService: ReportService) {
  }

  async ngOnInit() {
    await this.platform.ready();

    await this.loadMap();
  }
  loadMap() {

    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyD_RA628bGTIXcJ9WX5jjGjFelHEko3QeI',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyD_RA628bGTIXcJ9WX5jjGjFelHEko3QeI'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -23.5588365,
          lng: -46.6610601
        },
        zoom: 18,
        tilt: 30
      },
      styles: mapStyle
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.generateMarkers();

    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
  }

  generateMarkers() {
    this.reportService.getReports().subscribe((reports) => {
      reports.map(mockedReport => {
        return this.map.addMarkerSync({
          title: '',
          icon: {
            url: mockedReport.icon,
            size: {
              width: 45,
              height: 45
            }
          },
          snippet: `
                <div class="marker-container">
                  <img src="${mockedReport.photo}">
                  <h4 class="text-uppercase">${mockedReport.title}</h4>
                  <small class="text-uppercase">Status</small>
                  <label style="font-size: 15px">${mockedReport.status}</label>
                </div>`,
          animation: 'DROP',
          position: {
            lat: mockedReport.location.latitude,
            lng: mockedReport.location.longitude
          }
        });
      });
    });
  }
}
