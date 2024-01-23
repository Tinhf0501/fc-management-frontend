import { Component, OnInit } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";

@Component({
    selector: 'fc-grid',
    templateUrl: './football-club-grid.component.html',
    styleUrls: ['./football-club-grid.component.scss'],
    standalone: true,
    imports: [
        AgGridAngular,
    ],
})
export class FootballClubGridComponent implements OnInit {

    public colDefs: ColDef[] = [
        {
            headerName: 'STT',
            valueGetter: (param) => {
                console.log(param);
                return 1;
            }
        },
        {
            headerName: 'Mã FC',
            field: 'code',
        },
        {
            headerName: 'Tên FC',
            field: 'name',
        },
        {
            headerName: 'Mô tả',
            field: 'description',
        },
        {
            headerName: 'logo',
            field: 'logo',
        },
        {
            headerName: 'Ngày tạo',
            field: 'createdDate',
        },
        {
            headerName: 'Người tạo',
            field: 'createdBy',
        },
        {
            headerName: 'Trạng thái',
            field: 'status',
        },
        {
            headerName: 'Thao tác',
        }

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
        }
    ]
    public ngOnInit(): void {

    }

    public onGridReady(param): void {
        param.api.sizeColumnsToFit();
    }

}
