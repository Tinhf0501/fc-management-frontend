import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridSizeChangedEvent } from 'ag-grid-community';

@Component({
    selector: 'fc-grid',
    templateUrl: './football-club-grid.component.html',
    styleUrls: ['./football-club-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class FootballClubGridComponent implements OnInit {
    public colDefs: ColDef[] = [
        {
            headerName: 'STT',
            valueGetter: (param) => {
                return param.node.rowIndex + 1;
            },
            minWidth: 50,
            pinned: 'left',
        },
        {
            headerName: 'Mã FC',
            field: 'code',
            tooltipField: 'code',
            minWidth: 100,
        },
        {
            headerName: 'Tên FC',
            field: 'name',
            tooltipField: 'name',
            minWidth: 100,
        },
        {
            headerName: 'Mô tả',
            field: 'description',
            tooltipField: 'description',
            minWidth: 100,
        },
        {
            headerName: 'logo',
            field: 'logo',
            tooltipField: 'logo',
            minWidth: 100,
        },
        {
            headerName: 'Ngày tạo',
            field: 'createdDate',
            tooltipField: 'createdDate',
            minWidth: 100,
        },
        {
            headerName: 'Người tạo',
            field: 'createdBy',
            tooltipField: 'createdBy',
            minWidth: 100,
        },
        {
            headerName: 'Trạng thái',
            field: 'status',
            tooltipField: 'status',
            minWidth: 100,
        },
        {
            headerName: 'Thao tác',
            minWidth: 100,
            pinned: 'right',
        },
    ];

    public rowData = [
        {
            code: '123',
            name: 'FC Tình Lý Do',
            description: 'Hay lý do',
            logo: 'no image',
            createdDate: '05/01/2000',
            createdBy: 'tinhf0501',
            status: 'Đang hoạt động',
        },
    ];
    public ngOnInit(): void {}

    public onGridReady(param): void {
        param.api.sizeColumnsToFit();
    }

    public onGridSizeChanged(param: GridSizeChangedEvent): void {
        param.api.sizeColumnsToFit();
    }
}
