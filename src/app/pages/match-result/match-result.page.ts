import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    MatchResultFormSearchComponent,
    MatchResultGridComponent,
} from '@fms-module/match-result';
import { FmsButtonComponent } from '@fms/button';
import { Pagination } from '@fms/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'match-result-page',
    templateUrl: './match-result.page.html',
    styleUrls: ['./match-result.page.scss'],
    standalone: true,
    imports: [
        MatchResultFormSearchComponent,
        MatchResultGridComponent,
        TranslateModule,

        RouterLink,

        FmsButtonComponent,
    ],
})
export class MatchResultPage {
    public pagination: Pagination = new Pagination(1, 100);
}
