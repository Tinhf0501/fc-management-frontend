import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridCore } from '@fms-module/common';

@Component({
    selector: 'scorer-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./scorer-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class ScorerGridComponent extends GridCore<any> {
    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.NO'),
                minWidth: 50,
                valueGetter: (param) => param.node.rowIndex + 1,
                pinned: 'left',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('SCORER.NAME'),
                minWidth: 100,
                field: 'name',
                tooltipField: 'name',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.FC'),
                minWidth: 100,
                field: 'fc',
                tooltipField: 'fc',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('SCORER.GOAL'),
                minWidth: 100,
                field: 'goal',
                tooltipField: 'gold',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('SCORER.GOAL_OG'),
                minWidth: 100,
                field: 'goalOg',
                tooltipField: 'goalOg',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.ACTION'),
                minWidth: 50,
                pinned: 'right',
            },
        ];
    }

    public override getRowData(): any[] {
        return [];
    }
}
