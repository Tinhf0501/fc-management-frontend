import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class NotifierService {
    public async success(message: string): Promise<SweetAlertResult> {
        return Swal.fire({
            title: 'Success',
            text: message,
            icon: 'success',
        });
    }

    public error(message: string, traceId?: string): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            footer: `<a href="javascript:void(0)">trace-id: ${traceId}</a>`,
        });
    }
}
