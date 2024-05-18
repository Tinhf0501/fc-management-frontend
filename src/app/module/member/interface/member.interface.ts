export interface CreateFCMemberRequest {
    userId?: number;
    nameShirt?: string;
    numberShirt?: number;
    fullName: string;
    phoneNumber: string;
    address?: string;
    description?: string;
    position: string[];
    avatar?: File;
}

export interface UpdateFCMemberRequest extends CreateFCMemberRequest {
    memberId: number;
    fcId: number;
    pathAvatarDel?: string;
}

export interface DetailMemberResponse {
    memberId: number;
    avatar?: string;
    nameShirt: string;
    numberShirt: number;
    position: string;
    fullName: string;
    phoneNumber: string;
    address?: string;
}
