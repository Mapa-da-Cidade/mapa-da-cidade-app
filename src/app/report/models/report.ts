import { ReportType } from './report-type';
export class Report {
  constructor(
    public icon: string,
    public title: string,
    public description: string,
    public type: ReportType
  ) {
  }
}
