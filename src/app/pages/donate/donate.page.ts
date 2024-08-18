import { Component, inject } from '@angular/core';
import {
    DonateFormSearchComponent,
    DonateGridComponent,
    CreateDonateModalComponent,
} from '@fms-module/donate';
import { Pagination } from '@fms/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '@fms/pagination';
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
