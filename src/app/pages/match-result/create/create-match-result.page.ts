import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatchResultCreateFormComponent } from '@fms-module/match-result';
import { ScorerGridComponent } from '@fms-module/scorer';
import { FmsButtonComponent } from '@fms/button';
import { Pagination } from '@fms/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'create-match-result-page',
    templateUrl: './create-match-result.page.html',
    styleUrls: ['./create-match-result.page.scss'],
    standalone: true,
    imports: [
        MatchResultCreateFormComponent,
        ScorerGridComponent,
        TranslateModule,

        FmsButtonComponent,
    ],
})
export class CreateMatchResultPage {
    private readonly location = inject(Location);

    public pagination = new Pagination(1, 10);

    public goBack(): void {
        this.location.back();
    }
}
