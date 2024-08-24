import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignalPipe } from '@fms/core';
import { FmsDateComponent } from '@fms/date-picker';
import { FmsInputComponent } from '@fms/input';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { OnModalInit, OnModalSave } from 'src/app/module/shared/fms-modal/hook';

@Component({
    selector: 'funding-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,

        FmsSelectComponent,
        FmsInputComponent,
        FmsDateComponent,
        SignalPipe
    ],
})
export class FundingCreateFormComponent implements OnInit, OnModalInit, OnModalSave {
    private modalRef: NzModalRef;

    private readonly formBuilder = inject(FormBuilder)

    public formGroup: FormGroup;
    public items = [];

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            name: [null, [Validators.required]],
            amt: [null, [Validators.required]],
            currency: [null, [Validators.required]],
            fc: [null, [Validators.required]],
            startDate: [null, [Validators.required]],
            desc: [null, [Validators.required]]
        })        
    }

    ngOnModalInit(ref: NzModalRef): void | Promise<void> {
        this.modalRef = ref;
    }

    ngOnModalSave(): void | Promise<void> {
        this.modalRef.close();
    }
}
