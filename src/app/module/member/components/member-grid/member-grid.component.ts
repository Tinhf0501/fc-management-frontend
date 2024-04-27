import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridCore } from '@fms-module/common';

@Component({
    selector: 'member-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./member-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class MemberGridComponent extends GridCore<any> {
    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.NO'),
                minWidth: 50,
                valueGetter: (param) => {
                    return param.node.rowIndex + 1;
                },
                pinned: 'left',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.PRINTED_NAME'),
                minWidth: 100,
                field: 'nameShirt',
                tooltipField: 'nameShirt',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.PRINTED_NUMBER'),
                minWidth: 50,
                field: 'numberShirt',
                tooltipField: 'numberShirt',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.POSITION'),
                minWidth: 100,
                field: 'position',
                tooltipField: 'position',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.FULLNAME'),
                minWidth: 100,
                field: 'fullName',
                tooltipField: 'fullName',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.DOB'),
                minWidth: 100,
                field: 'dob',
                tooltipField: 'dob',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.PHONE'),
                minWidth: 100,
                field: 'phoneNumber',
                tooltipField: 'phoneNumber',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.ADDRESS'),
                minWidth: 100,
                field: 'address',
                tooltipField: 'address',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.AVATAR'),
                minWidth: 100,
                field: 'avatar',
                tooltipField: 'avatar',
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
        return null;
        // return [
        //     {
        //         printedName: 'TINHNH',
        //         printedNumber: 21,
        //         position: 'ST/Captain/CB',
        //         fullName: 'Nguyễn Hùng Tình',
        //         dob: '05-01-2000',
        //         phone: '0387958475',
        //         address: 'Hà Nội',
        //         avatar: 'no image',
        //         account: 'tinhf0501',
        //     },
        // ];
    }
}
