import { Component, inject } from '@angular/core';
import {
    DonateFormSearchComponent,
    DonateGridComponent,
    CreateDonateModalComponent,
} from '@fms-module/donate';
import { PaginationComponent, Pagination } from '@fms-module/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'donate-page',
    templateUrl: './donate.page.html',
    styleUrls: ['./donate.page.scss'],
    standalone: true,
    imports: [
        DonateFormSearchComponent,
        DonateGridComponent,
        PaginationComponent,
        TranslateModule,

        FontAwesomeModule,
    ],
})
export class DonatePage {
    private modalService: NgbModal = inject(NgbModal);

    public pagination: Pagination = new Pagination(1, 100);

    public openAddDonate(): void {
        this.modalService.open(CreateDonateModalComponent, {
            size: 'md',
            centered: true,
        });
    }
}
