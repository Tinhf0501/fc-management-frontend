import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DynamicViewDirective } from '../common/directives/dynamic-view.directive';
import { FmsButtonComponent } from '../fms-button/fms-button.component';
import { ActionEvent, ColumnTable, TableOptions } from './model';
import { Pagination } from '@fms/core';

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
        NgTemplateOutlet,
        FmsButtonComponent,
        NzSpaceModule,
    ],
})
export class FmsTableComponent<T> {
    @Input({ required: true }) rows: T[];
    @Input({ required: true }) columns: ColumnTable<T>[];
    @Input({ required: true }) options: TableOptions<T>;
    @Input() pagination?: Pagination;
    @Input() title?: string;

    @Output() paginate = new EventEmitter<number>();
    @Output() pageSizeChange = new EventEmitter<number>();
    @Output() clickAction = new EventEmitter<{
        event: ActionEvent;
        data?: any;
    }>();

    public actionEvent = ActionEvent;

    public trackByFn = (index: number, data: T): any => {
        return data[this.options.uniqueKey];
    };
}
