import { ReportType } from './report-type';
import { ReportLocation } from './report-location';
import { ReportStatus } from './report-status';

export class ReportModel {
  public location: ReportLocation;
  public photo: string;
  public createdAt: Date;
  public updatedAt: Date;
  public userId: string;

  constructor(
    public icon: string,
    public title: string,
    public description: string,
    public type: ReportType,
    public status: ReportStatus
  ) {
  }

  public addData(
    location?: ReportLocation,
    photo?: string,
    userId?: string,
  ) {
    this.location = location;
    this.photo = photo;
    this.createdAt = new Date();
    this.updatedAt = this.createdAt
    this.userId = userId;
  }
}
