import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CreateFCMemberRequest, POSITION_MAP } from '@fms-module/member';
import { fileToImageUrl, Pagination } from '@fms/core';
import { ModalService } from '@fms/modal';
import { ActionColumnComponent, ActionEvent, ColumnTable, FmsTableComponent, TableOptions } from '@fms/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'member-grid',
    templateUrl: './member-grid.component.html',
    styleUrls: ['./member-grid.component.scss'],
    standalone: true,
    imports: [FmsTableComponent, TranslateModule],
})
export class MemberGridComponent implements OnInit {
    @Input() readonly: boolean = false;
    @Input() rows: any[] = [];
    @Input() pagination: Pagination;

    @Output() updateMember = new EventEmitter<{
        data: CreateFCMemberRequest;
        index: number;
    }>();
    @Output() deleteMember = new EventEmitter<number>();
    @Output() paginate = new EventEmitter<Pagination>();
    @Output() clickAction = new EventEmitter<{
        event: ActionEvent;
        data?: any;
    }>();
    
    public readonly tableOptions: TableOptions<any> = {
        uniqueKey: 'id',
        isCreate: true,
        isExport: true,
    };

    public columns: ColumnTable<any>[];

    private readonly modalService = inject(ModalService);
    private readonly translateService = inject(TranslateService);

    ngOnInit(): void {
        const column: ColumnTable<any>[] = [
            {
                label: 'MEMBER.AVATAR',
                valueGetter: (data) => {
                    const imageUrl = fileToImageUrl(data.avatar);
                    if (!imageUrl) return '';
                    return `<img src='${imageUrl}' style='width: 200px; height: 100px' />`;
                },
            },
            {
                label: 'COMMON.NO',
                valueGetter: (_, rowIndex) => {
                    const { page, pageSize } = this.pagination;
                    const rowNumber = rowIndex + 1;
                    return (page - 1) * pageSize + rowNumber;
                },
                pinned: 'left',
            },
            {
                label: 'MEMBER.PRINTED_NAME',
                name: 'nameShirt',
            },
            {
                label: 'MEMBER.PRINTED_NUMBER',
                name: 'numberShirt',
            },
            {
                label: 'COMMON.POSITION',
                valueGetter: (data) => {
                    const { position } = data;
                    if (!position) return;
                    return position.map((pos) => {
                        const { name } = POSITION_MAP.get(pos);
                        return this.translateService.instant(name);
                    });
                }
            },
            {
                label: 'MEMBER.FULLNAME',
                name: 'fullName',
            },
            {
                label: 'MEMBER.PHONE',
                name: 'phoneNumber',
            },
            {
                label: 'MEMBER.ADDRESS',
                name: 'address',
            },

            {
                label: 'COMMON.ACTION',
                customColumn: ActionColumnComponent,
                customColumnParams: {
                    actions: [
                        {
                            icon: 'edit',
                            classes: 'text-warning',
                            onClick: this.onEditMember.bind(this),
                        },
                        {
                            icon: 'delete',
                            classes: 'text-danger',
                            onClick: this.onDeleteMember.bind(this),
                        },
                    ],
                },
                pinned: 'right',
            },
        ];
        if (this.readonly) {
            column.splice(column.length - 1, 1);
        }
        this.columns = column;
    }

    public onEditMember(data, rowIndex: number): void {
        // const modalRef = this.modalService.open(CreateMemberModal, {
        //     centered: true,
        //     size: 'lg',
        // });
        // modalRef.componentInstance.member = data;
        // modalRef.closed.subscribe((res) => {
        //     if (res) {
        //         this.updateMember.emit({
        //             data: res,
        //             index: rowIndex,
        //         });
        //     }
        // });
    }

    public onDeleteMember(data, rowIndex: number): void {
        this.modalService.open('confirm', {
            title: this.translateService.instant('COMMON.CONFIRM'),
            content: this.translateService.instant('MEMBER.CONFIRM_DELETE'),
            onOk: () => this.deleteMember.emit(rowIndex),
        });
    }
}
