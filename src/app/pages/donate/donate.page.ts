import { Component, inject } from '@angular/core';
import {
    CreateDonateFormComponent,
    DonateFormSearchComponent,
    DonateGridComponent,
} from '@fms-module/donate';
import { FmsButtonComponent } from '@fms/button';
import { Pagination } from '@fms/core';
import { ModalService } from '@fms/modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'donate-page',
    templateUrl: './donate.page.html',
    styleUrls: ['./donate.page.scss'],
    standalone: true,
    imports: [
        DonateFormSearchComponent,
        DonateGridComponent,
        TranslateModule,
        FmsButtonComponent,
    ],
})
export class DonatePage {
    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService);

    public pagination: Pagination = new Pagination(1, 100);

    public openAddDonate(): void {
        this.modalService.openModal({
            title: this.translateService.instant('DONATE.CREATE_TITLE'),
            content: CreateDonateFormComponent,
        });
    }
}
