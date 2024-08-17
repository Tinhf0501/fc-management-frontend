import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DynamicViewDirective } from '../../directives/dynamic-view.directive';
import { Pagination } from '../../interface';

export interface ColumnTable<T> {
    label?: string;
    name?: keyof T;
    showCheckbox?: boolean;
    customColumn?: Type<any>;
    customColumnParams?: any;
    valueGetter?: (data: T, rowIndex?: number) => any;
}

@Component({
    selector: 'fms-table',
    templateUrl: './fms-table.component.html',
    styleUrls: ['./fms-table.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        NzTableModule,
        TranslateModule,
        DynamicViewDirective,
    ],
})
export class FmsTableComponent<T> {
    @Input({ required: true }) rows: T[];
    @Input({ required: true }) columns: ColumnTable<T>[];
    @Input() pagination: Pagination;

    @Output() paginate = new EventEmitter<number>();
    @Output() pageSizeChange = new EventEmitter<number>();
}
