export class ReportLocation {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  postalCode: string;
  number: string;
  address: string;


  constructor(latitude?: number, longitude?: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
