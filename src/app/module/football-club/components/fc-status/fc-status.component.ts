import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { FC_STATUS } from '../../constant';

@Component({
    selector: 'fc-status',
    templateUrl: './fc-status.component.html',
    styleUrls: ['./fc-status.component.scss'],
    standalone: true,
    imports: [TranslateModule],
})
export class FcStatusComponent implements ICellRendererAngularComp {
    public params: ICellRendererParams;
    public status: string;

    agInit(params: ICellRendererParams<any, any, any>): void {
        this.params = params;
        this.status = FC_STATUS[this.params.data.status - 1].desc;
    }

    refresh(params: ICellRendererParams<any, any, any>): boolean {
        return false;
    }
}
