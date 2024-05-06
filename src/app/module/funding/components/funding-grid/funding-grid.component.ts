import { Component } from '@angular/core';
import { GridCore } from '@fms-module/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
    selector: 'funding-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./funding-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class FundingGridComponent extends GridCore<any> {
    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('COMMON.NO'),
                minWidth: 50,
                valueGetter: (param) => param.node.rowIndex + 1,
                pinned: 'left',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('FUNDING.NAME'),
                minWidth: 100,
                field: 'name',
                tooltipField: 'name',
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
                    this.translateService.instant('FUNDING.AMOUNT_PERSON'),
                minWidth: 100,
                field: 'amount',
                tooltipField: 'amount',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('FUNDING.DATE'),
                minWidth: 100,
                field: 'fundedDate',
                tooltipField: 'fundedDate',
            },
            {
                headerValueGetter: (p) =>
                    this.translateService.instant('FUNDING.DESC'),
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
