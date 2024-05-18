import {
    CreateFCMemberRequest,
    DetailMemberResponse,
    UpdateFCMemberRequest,
} from '@fms-module/member';

export interface CreateFcRequest {
    fcName: string;
    description?: string;
    fcMembers?: CreateFCMemberRequest[];
    logo?: File;
    media?: File[];
}

export interface UpdateFcRequest extends CreateFcRequest {
    fcId: number;
    fcMemberUpdate?: UpdateFCMemberRequest[];
    pathLogoDel?: string;
    fcMemberIdsDelete?: number[];
    pathMediaDelete?: string[];
}

export interface DetailFCResponse {
    fcId: number;
    fcName: string;
    description?: string;
    status: number;
    slug: string;
    createdDate: number;
    logo: string;
    listResource?: string[];
    listMembers?: DetailMemberResponse[];
}
