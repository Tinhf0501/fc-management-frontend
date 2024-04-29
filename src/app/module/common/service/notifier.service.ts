import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class NotifierService {
    constructor(private translateService: TranslateService) {}

    public async success(message: string): Promise<SweetAlertResult> {
        return Swal.fire({
            title: this.translateService.instant('COMMON.NOTIFY.SUCCESS'),
            text: message,
            icon: 'success',
        });
    }

    public error(message: string, traceId?: string): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'error',
            title: this.translateService.instant('COMMON.NOTIFY.ERROR'),
            text: message,
            footer: `<a href="javascript:void(0)">trace-id: ${traceId}</a>`,
        });
    }
}
