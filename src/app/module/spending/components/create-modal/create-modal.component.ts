import { Component } from '@angular/core';
import { FmsModalComponent } from '@fms/modal';
import { TranslateModule } from '@ngx-translate/core';
import { SpendingCreateFormComponent } from '../create-form/create-form.component';

@Component({
    selector: 'spending-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss'],
    standalone: true,
    imports: [TranslateModule, SpendingCreateFormComponent, FmsModalComponent],
})
export class SpendingCreateModalComponent {}
