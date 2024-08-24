import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
    MatchResultFormSearchComponent,
    MatchResultGridComponent,
} from '@fms-module/match-result';
import { FmsBoxComponent } from '@fms/box';
import { FmsButtonComponent } from '@fms/button';
import { Pagination } from '@fms/core';
import { ActionEvent } from '@fms/table';
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

        FmsBoxComponent
    ],
})
export class MatchResultPage {
    public pagination: Pagination = new Pagination(1, 100);

    private readonly router = inject(Router);

    public clickAction(data: {event: ActionEvent, data?: any}): void {
        if (data.event === ActionEvent.CREATE) {
            this.router.navigateByUrl('/match-result/create');
            return;
        }
    }
}
