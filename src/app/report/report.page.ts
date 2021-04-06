import { ReportType } from './models/report-type';
import { Report } from './models/report';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss']
})
export class ReportPage {

  public reports: Array<Report>;

  constructor() {
    this.reports = new Array<Report>(
      new Report('assets/images/tree-leaf.svg', 'Árvores em risco', 'Sinalizar uma árvore que precisa de poda', ReportType.TreeAtRisk),
      new Report('assets/images/boat.svg', 'Áreas de alagamento', 'Sinalizar pontos de enchente', ReportType.Flooding),
      new Report('assets/images/sad.svg', 'Roubo / Furto', 'Sinalizar áreas com alto índice de roubos e furtos', ReportType.Theft),
      new Report('assets/images/flag.svg', 'Vias irregulares', 'Sinalizar ruas com buracos', ReportType.IrregularRoads),
      new Report('assets/images/flashlight.svg', 'Falta de Iluminação', 'Áreas sem iluminação', ReportType.LackOfLighting),
    );
  }

}
