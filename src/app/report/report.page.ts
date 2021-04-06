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
      new Report('', 'Árvores em risco', 'Sinalizar uma árvore que precisa de poda'),
      new Report('', 'Áreas de alagamento', 'Sinalizar pontos de enchente'),
      new Report('', 'Roubo / Furto', 'Sinalizar áreas com alto índice de roubos e furtos'),
      new Report('', 'Vias irregulares', 'Sinalizar ruas com buracos'),
      new Report('', 'Falta de Iluminação', 'Áreas sem iluminação'),
    );
  }

}
