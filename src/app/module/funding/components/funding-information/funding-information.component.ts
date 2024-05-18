import { Component } from '@angular/core';
import { MoneyPipe } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'funding-information',
    templateUrl: './funding-information.component.html',
    standalone: true,
    imports: [MoneyPipe, TranslateModule],
})
export class FundingInformationComponent {}
