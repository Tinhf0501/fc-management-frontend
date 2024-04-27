import { CreateFCMemberRequest } from '@fms-module/member';
import { CreateFCResourceRequest } from '@fms-module/resource';

export interface CreateFcRequest {
    fcName: string;
    description?: string;
    isGuest: boolean;
    fcMembers: CreateFCMemberRequest[];
    fcResources: CreateFCResourceRequest;
}
