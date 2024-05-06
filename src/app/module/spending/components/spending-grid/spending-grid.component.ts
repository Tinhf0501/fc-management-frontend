import { Component } from '@angular/core';
import { GridCore } from '@fms-module/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
    selector: 'spending-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./spending-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class SpendingGridComponent extends GridCore<any> {
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
                headerValueGetter: (p) =>
                    this.translateService.instant('COMMON.FC'),
                minWidth: 100,
                field: 'fc',
                tooltipField: 'fc',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('COMMON.AMT'),
                minWidth: 100,
                field: 'amount',
                tooltipField: 'amount',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('SPENDING.DATE'),
                minWidth: 100,
                field: 'date',
                tooltipField: 'date',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('COMMON.DESC'),
                minWidth: 100,
                field: 'desc',
                tooltipField: 'desc',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('COMMON.STATUS'),
                minWidth: 100,
                field: 'status',
                tooltipField: 'status',
            },
            {
                headerValueGetter: (p) =>
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
