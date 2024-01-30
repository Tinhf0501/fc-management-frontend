import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GridCore } from '@fms-module/common';

@Component({
    selector: 'fc-grid',
    templateUrl: '../../common/grid-core/grid-core.component.html',
    styleUrls: ['./football-club-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class FootballClubGridComponent extends GridCore<any> {

    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: param => this.translateService.instant('COMMON.NO'),
                valueGetter: (param) => {
                    return param.node.rowIndex + 1;
                },
                minWidth: 50,
                pinned: 'left',
            },
            {
                headerValueGetter: param => this.translateService.instant('FOOTBALL_CLUB.CODE'),
                field: 'code',
                tooltipField: 'code',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('FOOTBALL_CLUB.NAME'),
                field: 'name',
                tooltipField: 'name',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('COMMON.DESC'),
                field: 'description',
                tooltipField: 'description',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('MEMBER.AVATAR'),
                field: 'logo',
                tooltipField: 'logo',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('COMMON.CREATED_DATE'),
                field: 'createdDate',
                tooltipField: 'createdDate',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('COMMON.CREATED_BY'),
                field: 'createdBy',
                tooltipField: 'createdBy',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('COMMON.STATUS'),
                field: 'status',
                tooltipField: 'status',
                minWidth: 100,
            },
            {
                headerValueGetter: param => this.translateService.instant('COMMON.ACTION'),
                minWidth: 100,
                pinned: 'right',
            },
        ];
    }

    public override getRowData(): any[] {
        return [
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
    }
}
