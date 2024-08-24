import { Component, inject } from '@angular/core';
import {
    SpendingCreateFormComponent,
    SpendingFormSearchComponent,
    SpendingGridComponent
} from '@fms-module/spending';
import { FmsBoxComponent } from '@fms/box';
import { Pagination } from '@fms/core';
import { ModalService } from '@fms/modal';
import { ActionEvent } from '@fms/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'spending-page',
    templateUrl: './spending.page.html',
    styleUrls: ['./spending.page.scss'],
    standalone: true,
    imports: [
        SpendingFormSearchComponent,
        SpendingGridComponent,
        TranslateModule,

        FmsBoxComponent
    ],
})
export class SpendingPage {
    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService)
    public pagination: Pagination = new Pagination(1, 100);

    public openAddModal(): void {
        this.modalService.openModal({
            title: this.translateService.instant('SPENDING.CREATE_TITLE'),
            content: SpendingCreateFormComponent
        });
    }

    public clickAction(data: {event: ActionEvent, data?: any}): void {
        if (data.event === ActionEvent.CREATE) {
            this.openAddModal();
            return;
        }
    }
}
