import { Component } from '@angular/core';
import { ModalWrapperComponent } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { FundingCreateFormComponent } from '../create-form/create-form.component';

@Component({
    selector: 'funding-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss'],
    standalone: true,
    imports: [
        FundingCreateFormComponent,
        TranslateModule,
        ModalWrapperComponent,
    ],
})
export class FundingCreateModalComponent {
    
}
