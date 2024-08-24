import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '@fms/core';
import { ActionEvent, ColumnTable, FmsTableComponent, TableOptions } from '@fms/table';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'donate-grid',
    templateUrl: './donate-grid.component.html',
    styleUrls: ['./donate-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],
})
export class DonateGridComponent {
    @Input() rows: any[] = [
        {
            name: 'Tinhf0501',
            amount: '1.000.000đ',
            note: 'Quỹ tháng 1',
            fcName: 'FC 2000',
            createdDate: '26-01-2024',
            status: 'Hoàn thành',
        },
    ];

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
            label: 'DONATE.NAME_DONATOR',
            name: 'name',
        },
        {
            label: 'DONATE.AMOUNT_DONATE',
            name: 'amount',
        },
        {
            label: 'DONATE.CONTENT',
            name: 'note',
        },
        {
            label: 'COMMON.FC',
            name: 'fcName',
        },
        {
            label: 'DONATE.DATE_DONATE',
            name: 'createdDate',
        },
        {
            label: 'COMMON.STATUS',
            name: 'status',
        },
        {
            label: 'COMMON.ACTION',
            pinned: 'right',
        },
    ];
}
