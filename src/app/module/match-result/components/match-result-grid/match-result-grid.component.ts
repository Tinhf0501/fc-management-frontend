import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '@fms/core';
import { ActionEvent, ColumnTable, FmsTableComponent, TableOptions } from '@fms/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'match-result-grid',
    templateUrl: './match-result-grid.component.html',
    styleUrls: ['./match-result-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],
})
export class MatchResultGridComponent {

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
            label: 'MATCH_RESULT.NAME',
            name: 'name',
        },
        {
            label: 'MATCH_RESULT.RESULT',
            name: 'result',
        },
        {
            label: 'MATCH_RESULT.DATE',
            name: 'date',
        },
        {
            label: 'MATCH_RESULT.ADDRESS',
            name: 'address',
        },
        {
            label: 'COMMON.ACTION',
            pinned: 'right',
        },
    ];

}
