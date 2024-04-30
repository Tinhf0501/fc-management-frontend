import { Component, inject } from '@angular/core';
import {
    FundingFormSearchComponent,
    FundingGridComponent,
    FundingCreateModalComponent,
} from '@fms-module/funding';
import { PaginationComponent, Pagination } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'funding-page',
    templateUrl: './funding.page.html',
    styleUrls: ['./funding.page.scss'],
    standalone: true,
    imports: [
        FundingFormSearchComponent,
        FundingGridComponent,
        PaginationComponent,
        TranslateModule,
    ],
})
export class FundingPage {
    private modalService: NgbModal = inject(NgbModal);

    public pagination: Pagination = new Pagination(1, 100);

    public openAddFunding(): void {
        this.modalService.open(FundingCreateModalComponent, {
            centered: true,
            size: 'md',
        });
    }
}
