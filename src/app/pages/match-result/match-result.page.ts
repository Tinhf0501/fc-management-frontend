import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    MatchResultFormSearchComponent,
    MatchResultGridComponent,
} from '@fms-module/match-result';
import { Pagination } from '@fms/core';
import { PaginationComponent } from '@fms/pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

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
