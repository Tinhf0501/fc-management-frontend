import { Component } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import {
    ColDef,
    GridReadyEvent,
    GridSizeChangedEvent,
} from "ag-grid-community";

@Component({
    selector: 'member-grid',
    templateUrl: './member-grid.component.html',
    styleUrls: ['./member-grid.component.scss'],
    standalone: true,
    imports: [
        AgGridAngular,
    ],
})
export class MemberGridComponent {
    
    public columnDefs: ColDef[] = [

        {
            headerName: 'STT',
            minWidth: 50,
            valueGetter: param => {
                return param.node.rowIndex + 1;
            },
            pinned: 'left',
        },
        {
            headerName: 'Tên áo',
            minWidth: 100,
            field: 'printedName',
            tooltipField: 'printedName',
        },
        {
            headerName: 'Số áo',
            minWidth: 50,
            field: 'printedNumber',
            tooltipField: 'printedNumber',
        },
        {
            headerName: 'Vị trí',
            minWidth: 100,
            field: 'position',
            tooltipField: 'position',
        },
        {
            headerName: 'Họ và tên',
            minWidth: 100,
            field: 'fullName',
            tooltipField: 'fullName',
        },
        {
            headerName: 'Ngày sinh',
            minWidth: 100,
            field: 'dob',
            tooltipField: 'dob',
        },
        {
            headerName: 'SĐT',
            minWidth: 100,
            field: 'phone',
            tooltipField: 'phone',
        },
        {
            headerName: 'Địa chỉ',
            minWidth: 100,
            field: 'address',
            tooltipField: 'address',
        },
        {
            headerName: 'Ảnh đại diện',
            minWidth: 100,
            field: 'avatar',
            tooltipField: 'avatar',
        },
        {
            headerName: 'Tên tài khoản',
            minWidth: 100,
            field: 'account',
            tooltipField: 'account',
        },
        {
            headerName: 'Thao tác',
            minWidth: 50,
            pinned: 'right'
        },
    ]

    public rowData = [
        {
            printedName: 'TINHNH',
            printedNumber: 21,
            position: 'ST/Captain/CB',
            fullName: 'Nguyễn Hùng Tình',
            dob: '05-01-2000',
            phone: '0387958475',
            address: 'Hà Nội',
            avatar: 'no image',
            account: 'tinhf0501',
        }
    ]


    public onGridReady(param: GridReadyEvent): void {
        param.api.sizeColumnsToFit();
    }

    public onGridSizeChanged(param: GridSizeChangedEvent): void {
        param.api.sizeColumnsToFit();
    }
}
