import {ReportType} from '../shared/models/report/report-type';
import {ReportModel} from '../shared/models/report/report.model';
import {Component} from '@angular/core';
import {ReportStatus} from '../shared/models/report/report-status';

@Component({
    selector: 'app-report',
    templateUrl: 'report.page.html',
    styleUrls: ['report.page.scss']
})
export class ReportPage {

    public reports: Array<ReportModel>;

    constructor() {
        this.reports = new Array<ReportModel>(
            new ReportModel(
                'assets/images/tree-leaf.svg',
                'Árvores em risco',
                'Sinalizar uma árvore que precisa de poda',
                ReportType.TreeAtRisk,
                ReportStatus.Unanswered
            ),
            new ReportModel('assets/images/boat.svg',
                'Áreas de alagamento',
                'Sinalizar pontos de enchente',
                ReportType.Flooding,
                ReportStatus.Unanswered
            ),
            new ReportModel(
                'assets/images/sad.svg',
                'Roubo / Furto',
                'Sinalizar áreas com alto índice de roubos e furtos',
                ReportType.Theft,
                ReportStatus.Unanswered
            ),
            new ReportModel(
                'assets/images/flag.svg',
                'Vias irregulares',
                'Sinalizar ruas com buracos',
                ReportType.IrregularRoads,
                ReportStatus.Unanswered
            ),
            new ReportModel('assets/images/flashlight.svg',
                'Falta de Iluminação',
                'Áreas sem iluminação',
                ReportType.LackOfLighting,
                ReportStatus.Unanswered
            ),
        );
    }

}
