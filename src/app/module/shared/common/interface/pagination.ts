import { DEFAULT_PAGE_SIZE } from '../constant';

export class Pagination {
    page: number;
    pageSize: number;
    total: number;

    constructor(page: number, total: number) {
        this.page = page;
        this.total = total;
        this.pageSize = DEFAULT_PAGE_SIZE;
    }
}

export interface PagingRequest<T> {
    pageNo: number;
    pageSize: number;
    data: T;
}

export interface PagingResponse<T> {
    items: T[];
    totalItems: number;
    totalPage: number;
}
