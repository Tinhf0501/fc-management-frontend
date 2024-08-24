import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { FmsButtonComponent } from '../../fms-button/fms-button.component';
import { ActionColumn } from '@fms/core';

@Component({
    selector: 'fms-action-column',
    templateUrl: './fms-action-column.component.html',
    standalone: true,
    imports: [NgIf, NgFor, TranslateModule, FmsButtonComponent, NzSpaceModule],
})
export class ActionColumnComponent<T> implements OnInit {
    public actions: ActionColumn<T>[];
    public data: T;
    public params: any;
    public rowIndex: number;

    public ngOnInit(): void {
        this.actions = this.params.actions;
    }
}
