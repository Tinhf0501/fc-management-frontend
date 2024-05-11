import { Component } from '@angular/core';
import { ModalWrapperComponent } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { SpendingCreateFormComponent } from '../create-form/create-form.component';

@Component({
    selector: 'spending-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss'],
    standalone: true,
    imports: [
        TranslateModule,
        SpendingCreateFormComponent,
        ModalWrapperComponent,
    ],
})
export class SpendingCreateModalComponent {}
