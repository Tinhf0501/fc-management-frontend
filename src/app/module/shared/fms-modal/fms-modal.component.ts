import { NgIf } from '@angular/common';
import {
    Component,
    ComponentRef,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import { DynamicViewDirective } from '@fms/core';
import { TranslateModule } from '@ngx-translate/core';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { ModalOptions } from './model';

@Component({
    selector: 'fms-modal',
    templateUrl: './fms-modal.component.html',
    styleUrls: ['./fms-modal.component.scss'],
    standalone: true,
    imports: [NgIf, TranslateModule, NzModalModule, DynamicViewDirective],
})
export class FmsModalComponent {
    @Input() headerTitle: string;

    @Output() cancel = new EventEmitter<void>();
    @Output() save = new EventEmitter<void>();

    public readonly options: ModalOptions = inject(NZ_MODAL_DATA);
    private readonly modalRef = inject(NzModalRef);

    public ngOnSave(): void {
        this.save.emit();
    }

    public ngOnCancel(): void {
        this.cancel.emit();
    }

    public generatedView(componentRef: ComponentRef<any>): void {
        const { instance } = componentRef;
        instance?.ngOnModalInit?.(this.modalRef);
        this.modalRef.updateConfig({
            nzOnOk: () => {
                instance?.ngOnModalSave?.();
                return false;
            },
            nzOnCancel: () => {
                if (instance?.ngOnModalCancel) {
                    instance.ngOnModalCancel();
                } else {
                    this.modalRef.close();
                }
                return false;
            },
        });
    }
}
