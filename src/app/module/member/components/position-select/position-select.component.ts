import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    inject
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { DestroyService, SignalPipe } from '@fms/core';
import { FmsSelectComponent } from '@fms/select';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { POSITIONS } from '../../constant';

@Component({
    selector: 'position-select',
    templateUrl: './position-select.component.html',
    standalone: true,
    imports: [
        FmsSelectComponent,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        SignalPipe
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
