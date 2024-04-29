import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { NotifierService } from './notifier.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    private readonly notifierService = inject(NotifierService);

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const requestWithToken = req.clone();
        requestWithToken.headers.append('Authorization', 'Bearer <<TOKEN>>');
        return next.handle(requestWithToken).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    const traceId = err.error.traceId;
                    if (err.error.apiError.errors) {
                        const messages = Object.entries(
                            err.error.apiError.errors,
                        )
                            .map((x) => x[1])
                            .join(', ');
                        this.notifierService.error(messages, traceId);
                    } else if (err.error.apiError.message) {
                        this.notifierService.error(
                            err.error.apiError.message,
                            traceId,
                        );
                    }
                } else {
                    this.notifierService.error(err.message, 'nothing');
                }
                return EMPTY;
            }),
        );
    }
}
