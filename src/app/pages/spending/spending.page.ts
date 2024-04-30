import { Component, inject } from '@angular/core';
import {
    SpendingFormSearchComponent,
    SpendingGridComponent,
} from '@fms-module/spending';
import { PaginationComponent, Pagination } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpendingCreateModalComponent } from '@fms-module/spending';

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
