import {
    CreateFCMemberRequest,
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
    fcMemberUpdate: UpdateFCMemberRequest[];
    fcMemberIdsDelete: number[];
    pathMediaIdsDelete: number[];
}
