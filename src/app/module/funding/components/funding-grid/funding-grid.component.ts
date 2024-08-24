import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '@fms/core';
import { ActionEvent, ColumnTable, FmsTableComponent, TableOptions } from '@fms/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'funding-grid',
    templateUrl: './funding-grid.component.html',
    styleUrls: ['./funding-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],
})
export class FundingGridComponent {

    @Input() rows: any[] = [];

    @Input() pagination: Pagination;

    @Output() paginate = new EventEmitter<Pagination>();
    @Output() clickAction = new EventEmitter<{
        event: ActionEvent;
        data?: any;
    }>();
    
    public readonly tableOptions: TableOptions<any> = {
        uniqueKey: 'id',
        isCreate: true,
        isExport: true,
    };

    public readonly columns: ColumnTable<any>[] = [
        {
            label: 'COMMON.NO',
            pinned: 'left',
            valueGetter: (_, rowIndex) => {
                const { page, pageSize } = this.pagination;
                const rowNumber = rowIndex + 1;
                return (page - 1) * pageSize + rowNumber;
            },
        },
        {
            label: 'FUNDING.NAME',
            name: 'name',
        },
        {
            label: 'COMMON.FC',
            name: 'fc',
        },
        {
            label: 'FUNDING.AMOUNT_PERSON',
            name: 'amount',
        },
        {
            label: 'FUNDING.DATE',
            name: 'fundedDate',
        },
        {
            label: 'FUNDING.DESC',
            name: 'desc',
        },
        {
            label: 'COMMON.STATUS',
            name: 'status',
        },
        {
            label: 'COMMON.ACTION',
            pinned: 'right',
        },
    ]
}
