import { Component } from '@angular/core';
import {
    SpendingFormSearchComponent,
    SpendingGridComponent,
} from '@fms-module/spending';
import  {
    PaginationComponent,
    Pagination,
} from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'spending-page',
    templateUrl: './spending.page.html',
    styleUrls: ['./spending.page.scss',],
    standalone: true,
    imports: [
        SpendingFormSearchComponent,
        SpendingGridComponent,
        TranslateModule,
        PaginationComponent,
    ],
})
export class SpendingPage {
    
    public pagination: Pagination = new Pagination(1, 100);

}
