import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridCore } from '@fms-module/common';

@Component({
    selector: 'match-result-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./match-result-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class MatchResultGridComponent extends GridCore<any> {
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
                    this.translateService.instant('MATCH_RESULT.NAME'),
                minWidth: 100,
                field: 'name',
                tooltipField: 'name',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MATCH_RESULT.RESULT'),
                minWidth: 100,
                field: 'result',
                tooltipField: 'result',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MATCH_RESULT.DATE'),
                minWidth: 100,
                field: 'date',
                tooltipField: 'date',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MATCH_RESULT.ADDRESS'),
                minWidth: 100,
                field: 'address',
                tooltipField: 'address',
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
