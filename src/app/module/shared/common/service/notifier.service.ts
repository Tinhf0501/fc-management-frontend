import { inject, Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root',
})
export class NotifierService {
    private readonly modalService = inject(NzModalService);
    private readonly messageService = inject(NzMessageService);

    public success(message: string, title: string = 'Success'): void {
        this.messageService.success(`${title}<br>${message}`);
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
