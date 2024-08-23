import { inject, Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
    providedIn: 'root',
})
export class NotifierService {
    private readonly modalService = inject(NzModalService);

    public async success(
        message: string,
        title: string = 'Success',
    ): Promise<void> {
        const ref = this.modalService.success({
            nzTitle: title,
            nzContent: message,
        });
        return ref.afterClose.asObservable().toPromise();
    }

    public error(
        message: string,
        traceId?: string,
        title: string = 'Fail',
    ): Promise<void> {
        const ref = this.modalService.success({
            nzTitle: title,
            nzContent: `${message}<br><a href="javascript:void(0)">trace-id: ${traceId ?? ''}</a>`,
        });
        return ref.afterClose.asObservable().toPromise();
    }
}
