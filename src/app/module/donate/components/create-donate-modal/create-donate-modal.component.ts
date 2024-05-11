import { Component } from '@angular/core';
import { ModalWrapperComponent } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { CreateDonateFormComponent } from '../create-donate-form/create-donate-form.component';

@Component({
    selector: 'create-donate-modal',
    templateUrl: './create-donate-modal.component.html',
    styleUrls: ['./create-donate-modal.component.scss'],
    standalone: true,
    imports: [
        TranslateModule,
        CreateDonateFormComponent,
        ModalWrapperComponent,
    ],
})
export class CreateDonateModalComponent {}
