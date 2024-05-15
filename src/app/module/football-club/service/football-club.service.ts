import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiBody, ApiResponse } from '@fms-module/common';
import { environment } from 'environment';
import { Observable, map } from 'rxjs';
import {
    CreateFcRequest,
    DetailFCResponse,
    SearchFcRequest,
    SearchFcResponse,
    UpdateFcRequest,
} from '../interface';
import {
    PagingRequest,
    PagingResponse,
} from '../../common/interface/paging.interface';

@Injectable({
    providedIn: 'root',
})
export class FootballClubService {
    private httpClient = inject(HttpClient);

    public createFc(createFcRequest: CreateFcRequest): Observable<ApiResponse> {
        const formData = new FormData();
        formData.append('fcName', createFcRequest.fcName);
        formData.append('description', createFcRequest.description);
        if (createFcRequest.logo) {
            formData.append('logo', createFcRequest.logo);
        }
        if (createFcRequest.media) {
            createFcRequest.media.forEach((file, index) => {
                formData.append(`media[${index}]`, file);
            });
        }
        createFcRequest.fcMembers.forEach((member, index) => {
            Object.keys(member).forEach((key) => {
                const value = member[key];
                if (value) formData.append(`fcMembers[${index}].${key}`, value);
            });
        });
        return this.httpClient.post<ApiResponse>(
            `${environment.FMS_BE_URL}/fc`,
            formData,
        );
    }

    public updateFc(updateFcRequest: UpdateFcRequest): Observable<ApiResponse> {
        return null;
    }

    public searchFc(
        searchFcRequest: PagingRequest<SearchFcRequest>,
    ): Observable<PagingResponse<SearchFcResponse>> {
        return this.httpClient
            .post<ApiResponse>(
                `${environment.FMS_BE_URL}/fc/search`,
                searchFcRequest,
            )
            .pipe(map((x) => x.apiBody.data));
    }

    public getDetailFc(fcId: number): Observable<DetailFCResponse> {
        return this.httpClient.get<DetailFCResponse>(`${environment.FMS_BE_URL}/fc/detail`, {
            params: {
                fcId: fcId
            }
        })
        .pipe(
            map<any, ApiBody>((x: ApiResponse) => x.apiBody),
            map<ApiBody, DetailFCResponse>(x => x.data)
        )
    }
}
