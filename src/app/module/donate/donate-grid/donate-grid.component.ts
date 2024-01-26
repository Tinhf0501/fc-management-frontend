import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'
import {
    GridReadyEvent,
    GridSizeChangedEvent,
    ColDef,
} from 'ag-grid-community';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'donate-grid',
    templateUrl: './donate-grid.component.html',
    styleUrls: ['./donate-grid.component.scss'],
    standalone: true,
    imports: [
        AgGridAngular,
    ],
})
export class DonateGridComponent {

    private translateService: TranslateService = inject(TranslateService);

    public columnDefs: ColDef[] = [
        {
            headerName: this.translateService.instant('COMMON.NO'),
            minWidth: 50,
            pinned: 'left',
        },
        {
            headerName: this.translateService.instant('DONATE.NAME_DONATOR'), 
            minWidth: 100,
            field: 'name',
            tooltipField: 'name',
        },
        {
            headerName: this.translateService.instant('DONATE.AMOUNT_DONATE'),
            minWidth: 100,
            field: 'amount',
            tooltipField: 'amount',
        },
        {
            headerName: this.translateService.instant('DONATE.CONTENT'),
            minWidth: 100,
            field: 'note',
            tooltipField: 'note',
        },
        {
            headerName: this.translateService.instant('COMMON.FC'), 
            minWidth: 100,
            field: 'fcName',
            tooltipField: 'fcName'
        },
        {
            headerName: this.translateService.instant('DONATE.DATE_DONATE'),
            minWidth: 100,
            field: 'createdDate',
            tooltipField: 'createdDate',
        },
        {
            headerName: this.translateService.instant('COMMON.STATUS'),
            minWidth: 100,
            field: 'status',
            tooltipField: 'status',
        },
        {
            headerName: this.translateService.instant('COMMON.ACTION'),
            minWidth: 50,
            pinned: 'right',
        }
    ];

    public rowData = [
        {
            name: 'Tinhf0501',
            amount: '1.000.000đ',
            note: 'Quỹ tháng 1',
            fcName: 'FC 2000',
            createdDate: '26-01-2024',
            status: 'Hoàn thành',
        }
    ]; 


    public onGridReady(param: GridReadyEvent): void {
        param.api.sizeColumnsToFit();
    }

    public onGridSizeChanged(param: GridSizeChangedEvent): void {
        param.api.sizeColumnsToFit();
    }
}
