import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
    ActionColumnComponent,
    GridCore,
    formatDate,
} from '@fms-module/common';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { FC_STATUS } from '../../constant';
import { SearchFcResponse } from '../../interface';
import { FcStatusComponent } from '../fc-status/fc-status.component';
@Component({
    selector: 'fc-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./football-club-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular],
})
export class FootballClubGridComponent extends GridCore<SearchFcResponse> {
    private readonly router = inject(Router);

    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.NO'),
                valueGetter: (param) => {
                    const { page, pageSize } = this.pagination;
                    const rowNumber = param.node.rowIndex + 1;
                    return (page - 1) * pageSize + rowNumber;
                },
                minWidth: 50,
                maxWidth: 50,
                pinned: 'left',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('FOOTBALL_CLUB.NAME'),
                field: 'fcName',
                tooltipField: 'fcName',
                minWidth: 100,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.TEXT'),
                field: 'totalMembers',
                tooltipField: 'totalMembers',
                minWidth: 150,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.STATUS'),
                cellRenderer: FcStatusComponent,
                tooltipValueGetter: (params) => {
                    const { status } = params.data;
                    return this.translateService.instant(
                        `FOOTBALL_CLUB.STATUS.${FC_STATUS[status - 1].desc}`,
                    );
                },
                minWidth: 100,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.CREATED_DATE'),
                valueGetter: (param) => {
                    return formatDate(param.data.createdDate);
                },
                tooltipValueGetter: (param) => {
                    return formatDate(param.data.createdDate);
                },
                minWidth: 100,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.CREATED_BY'),
                field: 'createdBy',
                tooltipField: 'createdBy',
                minWidth: 100,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.UPDATED_DATE'),
                valueGetter: (param) => {
                    return formatDate(param.data.updatedDate);
                },
                tooltipValueGetter: (param) => {
                    return formatDate(param.data.updatedDate);
                },
                minWidth: 100,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.UPDATED_BY'),
                field: 'updatedBy',
                tooltipField: 'updatedBy',
                minWidth: 100,
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.ACTION'),
                cellRenderer: ActionColumnComponent,
                cellRendererParams: {
                    actions: [
                        {
                            icon: faEdit,
                            classes: 'text-warning',
                            onClick: this.onClickEditFc.bind(this),
                        },
                    ],
                },
                minWidth: 50,
                pinned: 'right',
            },
        ];
    }

    public override getRowData(): any[] {
        return null;
    }

    public onClickEditFc(params: ICellRendererParams): void {
        const data = params.data;
        this.router.navigate(
            ['football-club', 'update-football-club', data.slug],
            {
                queryParams: {
                    fcId: data.fcId,
                    fcName: data.fcName,
                },
            },
        );
    }
}
