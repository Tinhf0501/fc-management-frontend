import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    inject,
} from '@angular/core';
import { DestroyService, FmsSelectComponent } from '@fms-module/common';
import { TranslateModule } from '@ngx-translate/core';
import { POSITIONS } from '../../constant';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'position-select',
    templateUrl: './position-select.component.html',
    standalone: true,
    imports: [
        FmsSelectComponent,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [DestroyService],
})
export class PositionSelectComponent implements OnInit {
    @Input() value: string[];
    @Output() change = new EventEmitter<string[]>();

    private readonly formBuilder = inject(FormBuilder);
    private readonly destroyService = inject(DestroyService);

    public formGroup: FormGroup;
    public positions = POSITIONS;

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            position: [this.value, [Validators.required]],
        });
        this.formGroup.controls.position.valueChanges
            .pipe(takeUntil(this.destroyService.$destroy))
            .subscribe((res) => {
                this.change.emit(res);
            });
    }
}
