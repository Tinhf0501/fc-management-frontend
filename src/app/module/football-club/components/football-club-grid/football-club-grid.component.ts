import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
    ActionColumnComponent,
    ActionEvent,
    ColumnTable,
    FmsTableComponent,
    TableOptions,
} from '@fms/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FC_STATUS } from '../../constant';
import { SearchFcResponse } from '../../interface';
import { Pagination } from '@fms/core';
@Component({
    selector: 'fc-grid',
    templateUrl: './football-club-grid.component.html',
    styleUrls: ['./football-club-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],
})
export class FootballClubGridComponent {
    @Input() rowData: SearchFcResponse[];
    @Input() pagination: Pagination;

    @Output() paginate = new EventEmitter<Pagination>();
    @Output() clickAction = new EventEmitter<{
        event: ActionEvent;
        data?: any;
    }>();

    private readonly router = inject(Router);
    private readonly translateService = inject(TranslateService);

    readonly columns: ColumnTable<SearchFcResponse>[] = [
        {
            label: 'COMMON.NO',
            valueGetter: (_, rowIndex) => {
                const { page, pageSize } = this.pagination;
                const rowNumber = rowIndex + 1;
                return (page - 1) * pageSize + rowNumber;
            },
        },
        {
            label: 'FOOTBALL_CLUB.NAME',
            name: 'fcName',
        },
        {
            label: 'MEMBER.TEXT',
            name: 'totalMembers',
        },
        {
            label: 'COMMON.STATUS',
            name: 'status',
            valueGetter: (data) => {
                return this.translateService.instant(
                    `FOOTBALL_CLUB.STATUS.${FC_STATUS[data.status - 1].desc}`,
                );
            },
        },
        {
            label: 'COMMON.CREATED_DATE',
            name: 'createdDate',
        },
        {
            label: 'COMMON.CREATED_BY',
            name: 'createdBy',
        },
        {
            label: 'COMMON.UPDATED_DATE',
            name: 'updatedDate',
        },
        {
            label: 'COMMON.UPDATED_BY',
            name: 'updatedBy',
        },
        {
            pinned: 'right',
            customColumn: ActionColumnComponent<SearchFcResponse>,
            customColumnParams: {
                actions: [
                    {
                        icon: 'eye',
                        classes: 'text-dark',
                        onClick: this.onClickViewDetailFc.bind(this),
                    },
                    {
                        icon: 'edit',
                        classes: 'text-warning',
                        onClick: this.onClickEditFc.bind(this),
                    },
                ],
            },
        },
    ];

    readonly tableOptions: TableOptions<SearchFcResponse> = {
        uniqueKey: 'fcId',
        isCreate: true,
        isExport: true,
    };

    readonly rows: SearchFcResponse[] = [
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
        {
            fcId: 1,
            fcName: 'ssss',
            desc: 'sdfs',
            totalMembers: 10,
            createdDate: 10,
            createdBy: 'suongnv',
            updatedDate: 10,
            updatedBy: 'suongnv',
            status: 1,
            slug: 'asdfasdf',
        },
    ];

    public onClickViewDetailFc(data: SearchFcResponse): void {
        this.router.navigate(['football-club', 'detail', data.slug], {
            queryParams: {
                fcId: data.fcId,
                fcName: data.fcName,
            },
        });
    }

    public onClickEditFc(data: SearchFcResponse): void {
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
