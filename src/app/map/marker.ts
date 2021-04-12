import {ReportType} from '../shared/models/report/report-type';

export enum MarkerColor {
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  RED = 'red',
  PURPLE = 'purple'
}

export function getMarkerColorByType(type: ReportType): MarkerColor {
  switch (type) {
    case ReportType.TreeAtRisk: return MarkerColor.RED;
    case ReportType.Theft: return MarkerColor.GREEN;
    case ReportType.IrregularRoads: return MarkerColor.YELLOW;
    case ReportType.Flooding: return MarkerColor.BLUE;
    case ReportType.LackOfLighting: return MarkerColor.PURPLE;
  }
}
