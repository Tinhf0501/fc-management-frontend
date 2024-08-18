import { Component, inject } from '@angular/core';
import {
    FundingCreateModalComponent,
    FundingFormSearchComponent,
    FundingGridComponent,
} from '@fms-module/funding';
import { Pagination } from '@fms/core';
import { PaginationComponent } from '@fms/pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

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
        FontAwesomeModule,
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
