import { inject, Injectable, Type } from '@angular/core';
import { Confirmation } from '@fms/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalOptions, ModalSize } from './model';
import { FmsModalComponent } from './fms-modal.component';

export type ConfirmType = 'confirm' | 'warning' | 'error' | 'success';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private modal = inject(NzModalService);

    public open(
        type: ConfirmType,
        confirmation: Confirmation,
    ): NzModalRef<void> {
        return this.modal[type]({
            nzTitle: confirmation.title,
            nzContent: confirmation.content,
            nzCentered: true,
            nzClosable: true,
            nzOnOk: () => {
                confirmation.onOk?.();
            },
            nzOnCancel: () => {
                confirmation.onCancel?.();
            },
        });
    }

    public openModal(options: ModalOptions): NzModalRef {
        return this.modal.create({
            nzTitle: options.title,
            nzContent: FmsModalComponent,
            nzData: options,
            nzCentered: true,
            nzWidth: options.size ?? ModalSize.MEDIUM,
        });
    }
}
