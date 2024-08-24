import { ActionEvent } from '@fms/table';
import { Component, inject } from '@angular/core';
import {
    FundingCreateFormComponent,
    FundingFormSearchComponent,
    FundingGridComponent,
} from '@fms-module/funding';
import { FmsBoxComponent } from '@fms/box';
import { FmsButtonComponent } from '@fms/button';
import { Pagination } from '@fms/core';
import { ModalService } from '@fms/modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'funding-page',
    templateUrl: './funding.page.html',
    styleUrls: ['./funding.page.scss'],
    standalone: true,
    imports: [
        FundingFormSearchComponent,
        FundingGridComponent,
        TranslateModule,
        FmsButtonComponent,
        FmsBoxComponent
    ],
})
export class FundingPage {
    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService);

    public pagination: Pagination = new Pagination(1, 100);

    public openAddFunding(): void {
        this.modalService.openModal({
            title: this.translateService.instant('FUNDING.CREATE_TITLE'),
            content: FundingCreateFormComponent,
        });
    }

    public clickAction(data: {event: ActionEvent, data?: any}): void {
        if (data.event === ActionEvent.CREATE) {
            this.openAddFunding();
            return;
        }
    }
}
