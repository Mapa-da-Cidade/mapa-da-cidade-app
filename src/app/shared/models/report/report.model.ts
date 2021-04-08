import { ReportType } from './report-type';
import { ReportLocation } from './report-location';
import { ReportStatus } from './report-status';

export class ReportModel {
  constructor(
    public icon: string,
    public title: string,
    public description: string,
    public type: ReportType,
    public status: ReportStatus,
    public location?: ReportLocation,
    public photo?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public creatorUserId?: string,
  ) {
  }
}
