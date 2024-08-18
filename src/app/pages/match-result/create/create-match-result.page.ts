import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatchResultCreateFormComponent } from '@fms-module/match-result';
import { ScorerGridComponent } from '@fms-module/scorer';
import { FmsButtonComponent } from '@fms/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
        FontAwesomeModule,

        FmsButtonComponent,
    ],
})
export class CreateMatchResultPage {
    private readonly location = inject(Location);

    public goBack(): void {
        this.location.back();
    }
}
