import { Component } from '@angular/core';
import {
    MatchResultFormSearchComponent,
    MatchResultGridComponent,
} from '@fms-module/match-result';
import { PaginationComponent, Pagination } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'match-result-page',
    templateUrl: './match-result.page.html',
    styleUrls: ['./match-result.page.scss'],
    standalone: true,
    imports: [
        MatchResultFormSearchComponent,
        MatchResultGridComponent,
        PaginationComponent,
        TranslateModule,
        FontAwesomeModule,

        RouterLink,
    ],
})
export class MatchResultPage {
    public pagination: Pagination = new Pagination(1, 100);
}
