import { NzModalRef } from 'ng-zorro-antd/modal';

export interface OnModalInit {
    ngOnModalInit(ref: NzModalRef): void | Promise<void>;
}
export interface OnModalSave {
    ngOnModalSave(): void | Promise<void>;
}

export interface OnModalCancel {
    ngOnModalCancel(): void | Promise<void>;
}
