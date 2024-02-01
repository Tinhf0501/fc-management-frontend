import { Component } from '@angular/core';
import {
    FundingFormSearchComponent,
    FundingGridComponent,
} from '@fms-module/funding';
import {
    PaginationComponent,
    Pagination,
} from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'funding-page',
    templateUrl: './funding.page.html',
    styleUrls: ['./funding.page.scss',],
    standalone: true,
    imports: [
        FundingFormSearchComponent,
        FundingGridComponent,
        PaginationComponent,
        TranslateModule,
    ],
})
export class FundingPage {

    public pagination: Pagination = new Pagination(1, 100);

}
