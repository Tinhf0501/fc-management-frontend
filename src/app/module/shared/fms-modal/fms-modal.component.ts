import { NgIf } from '@angular/common';
import {
    Component,
    ComponentRef,
    inject,
    Input
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

    public readonly options: ModalOptions = inject(NZ_MODAL_DATA);
    private readonly modalRef = inject(NzModalRef);

    public generatedView(componentRef: ComponentRef<any>): void {
        const { instance } = componentRef;
        if (this.options.data) {
            Object.entries(this.options.data).forEach(([key, value]) => {
                instance[key] = value;
            });
        }
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
