import { Component, inject } from '@angular/core';
import {
    SpendingCreateModalComponent,
    SpendingFormSearchComponent,
    SpendingGridComponent,
} from '@fms-module/spending';
import { Pagination } from '@fms/core';
import { PaginationComponent } from '@fms/pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'spending-page',
    templateUrl: './spending.page.html',
    styleUrls: ['./spending.page.scss'],
    standalone: true,
    imports: [
        SpendingFormSearchComponent,
        SpendingGridComponent,
        TranslateModule,
        PaginationComponent,
        FontAwesomeModule,
    ],
})
export class SpendingPage {
    private modalService: NgbModal = inject(NgbModal);
    public pagination: Pagination = new Pagination(1, 100);

    public openAddModal(): void {
        this.modalService.open(SpendingCreateModalComponent, {
            centered: true,
            size: 'md',
        });
    }
}
