import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '@fms/core';
import { ActionEvent, ColumnTable, FmsTableComponent, TableOptions } from '@fms/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'scorer-grid',
    templateUrl: './scorer-grid.component.html',
    styleUrls: ['./scorer-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],
})
export class ScorerGridComponent {

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
            label: 'SCORER.NAME',
            name: 'name',
        },
        {
            label: 'COMMON.FC',
            name: 'fc',
        },
        {
            label: 'SCORER.GOAL',
            name: 'goal',
        },
        {
            label: 'SCORER.GOAL_OG',
            name: 'goalOg',
        },
        {
            label: 'COMMON.ACTION',
            pinned: 'right',
        },
    ]
}
