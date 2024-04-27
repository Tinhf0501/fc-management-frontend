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
