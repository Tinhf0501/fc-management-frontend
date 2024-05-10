export interface SearchFcRequest {
    fcName?: string;
    fcStatus?: number;
    fromDate?: string;
    toDate?: string;
}

export interface SearchFcResponse {
    fcId: number;
    fcName: string;
    desc: string;
    totalMembers: number;
    createdDate: number;
    createdBy: string;
    updatedDate: number;
    updatedBy: string;
    status: number;
    slug: string;
}
