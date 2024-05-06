import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridCore } from '@fms-module/common';

@Component({
    selector: 'donate-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./donate-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class DonateGridComponent extends GridCore<any> {
    public override getRowData(): any[] {
        return [
            {
                name: 'Tinhf0501',
                amount: '1.000.000đ',
                note: 'Quỹ tháng 1',
                fcName: 'FC 2000',
                createdDate: '26-01-2024',
                status: 'Hoàn thành',
            },
        ];
    }

    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.NO'),
                minWidth: 50,
                pinned: 'left',
                valueGetter: (param) => {
                    return param.node.rowIndex + 1;
                },
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('DONATE.NAME_DONATOR'),
                minWidth: 100,
                field: 'name',
                tooltipField: 'name',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('DONATE.AMOUNT_DONATE'),
                minWidth: 100,
                field: 'amount',
                tooltipField: 'amount',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('DONATE.CONTENT'),
                minWidth: 100,
                field: 'note',
                tooltipField: 'note',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.FC'),
                minWidth: 100,
                field: 'fcName',
                tooltipField: 'fcName',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('DONATE.DATE_DONATE'),
                minWidth: 100,
                field: 'createdDate',
                tooltipField: 'createdDate',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.STATUS'),
                minWidth: 100,
                field: 'status',
                tooltipField: 'status',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.ACTION'),
                minWidth: 50,
                pinned: 'right',
            },
        ];
    }
}
