import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { OnModalInit, OnModalSave } from 'src/app/module/shared/fms-modal/hook';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'funding-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgSelectModule,
    ],
})
export class FundingCreateFormComponent implements OnModalInit, OnModalSave {
    private modalRef: NzModalRef;

    ngOnModalInit(ref: NzModalRef): void | Promise<void> {
        this.modalRef = ref;
    }

    ngOnModalSave(): void | Promise<void> {}
}
