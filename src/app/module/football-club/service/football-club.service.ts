import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '@fms-module/common';
import { environment } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FootballClubService {
    private httpClient = inject(HttpClient);

    public createFc(formData: FormData): Observable<ApiResponse> {
        return this.httpClient.post<ApiResponse>(`${environment.FMS_BE_URL}/fc`, formData);
    }
}
