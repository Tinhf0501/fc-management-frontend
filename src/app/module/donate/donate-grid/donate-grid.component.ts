import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'
import {
    GridReadyEvent,
    GridSizeChangedEvent,
    ColDef,
} from 'ag-grid-community';

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

    public columnDefs: ColDef[] = [
        {
            headerName: 'STT',
            valueGetter: param => {
                return param.node.rowIndex + 1;
            },
            minWidth: 50,
            pinned: 'left',
        },
        {
            headerName: 'Người donate',
            minWidth: 100,
            field: 'name',
            tooltipField: 'name',
        },
        {
            headerName: 'Số tiền doante',
            minWidth: 100,
            field: 'amount',
            tooltipField: 'amount',
        },
        {
            headerName: 'Nội dung',
            minWidth: 100,
            field: 'note',
            tooltipField: 'note',
        },
        {
            headerName: 'Football club',
            minWidth: 100,
            field: 'fcName',
            tooltipField: 'fcName'
        },
        {
            headerName: 'Ngày donate',
            minWidth: 100,
            field: 'createdDate',
            tooltipField: 'createdDate',
        },
        {
            headerName: 'Trạng thái',
            minWidth: 100,
            field: 'status',
            tooltipField: 'status',
        },
        {
            headerName: 'thao tác',
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
