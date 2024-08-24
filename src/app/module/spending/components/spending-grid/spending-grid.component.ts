import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '@fms/core';
import { ActionEvent, ColumnTable, FmsTableComponent, TableOptions } from '@fms/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'spending-grid',
    templateUrl: './spending-grid.component.html',
    styleUrls: ['./spending-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],

})
export class SpendingGridComponent {

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
            label: 'COMMON.FC',
            name: 'fc',
        },
        {
            label: 'COMMON.AMT',
            name: 'amount',
        },
        {
            label: 'SPENDING.DATE',
            name: 'date',
        },
        {
            label: 'COMMON.DESC',
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
