import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
    ActionColumnComponent,
    ConfirmationComponent,
    GridCore,
    fileToImageUrl
} from '@fms-module/common';
import {
    CreateFCMemberRequest,
    CreateMemberModal,
    POSITION_MAP,
} from '@fms-module/member';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
@Component({
    selector: 'member-grid',
    templateUrl:
        '../../../common/components/grid-core/grid-core.component.html',
    styleUrls: ['./member-grid.component.scss'],
    standalone: true,
    imports: [AgGridAngular, TranslateModule],
})
export class MemberGridComponent extends GridCore<any> {
    @Output() updateMember = new EventEmitter<{
        data: CreateFCMemberRequest;
        index: number;
    }>();

    @Output() deleteMember = new EventEmitter<number>();

    private readonly modalService = inject(NgbModal);

    constructor() {
        super();
        this.gridOptions = {
            rowHeight: 100,
        };
    }

    public override getColumnDefs(): ColDef[] {
        return [
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.AVATAR'),
                minWidth: 200,
                cellRenderer: (params) => {
                    const imageUrl = fileToImageUrl(params.data.avatar);
                    if (!imageUrl) return '';
                    return `<img src='${imageUrl}' style='width: 200px; height: 100px' />`;
                },
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.NO'),
                minWidth: 50,
                valueGetter: (param) => {
                    return param.node.rowIndex + 1;
                },
                pinned: 'left',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.PRINTED_NAME'),
                minWidth: 100,
                field: 'nameShirt',
                tooltipField: 'nameShirt',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.PRINTED_NUMBER'),
                minWidth: 50,
                field: 'numberShirt',
                tooltipField: 'numberShirt',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.POSITION'),
                minWidth: 100,
                valueGetter: (params) => {
                    const { position } = params.data;
                    if (!position) return;
                    return position.map((pos) => {
                        const { name } = POSITION_MAP.get(pos);
                        return this.translateService.instant(name);
                    });
                },
                tooltipValueGetter: (params) => {
                    const { position } = params.data;
                    if (!position) return;
                    return position.map((pos) => {
                        const { name } = POSITION_MAP.get(pos);
                        return this.translateService.instant(name);
                    });
                },
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.FULLNAME'),
                minWidth: 100,
                field: 'fullName',
                tooltipField: 'fullName',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.PHONE'),
                minWidth: 100,
                field: 'phoneNumber',
                tooltipField: 'phoneNumber',
            },
            {
                headerValueGetter: (param) =>
                    this.translateService.instant('MEMBER.ADDRESS'),
                minWidth: 100,
                field: 'address',
                tooltipField: 'address',
            },

            {
                headerValueGetter: (param) =>
                    this.translateService.instant('COMMON.ACTION'),
                cellRenderer: ActionColumnComponent,
                cellRendererParams: {
                    actions: [
                        {
                            icon: faEdit,
                            classes: 'text-warning',
                            onClick: this.onEditMember.bind(this),
                        },
                        {
                            icon: faTrash,
                            classes: 'text-danger',
                            onClick: this.onDeleteMember.bind(this),
                        },
                    ],
                },
                minWidth: 50,
                pinned: 'right',
            },
        ];
    }

    public override getRowData(): any[] {
        return null;
    }

    public onEditMember(param: ICellRendererParams): void {
        const member = param.data;
        const modalRef = this.modalService.open(CreateMemberModal, {
            centered: true,
            size: 'lg',
        });
        modalRef.componentInstance.member = member;
        modalRef.closed.subscribe((res) => {
            if (res) {
                this.updateMember.emit({
                    data: res,
                    index: param.node.rowIndex,
                });
            }
        });
    }

    public onDeleteMember(param: ICellRendererParams): void {
        const modalRef = this.modalService.open(ConfirmationComponent, {
            centered: true,
            size: 'md',
        });
        modalRef.componentInstance.confirmation = {
            content: this.translateService.instant('MEMBER.CONFIRM_DELETE'),
            isHtml: false,
        };
        modalRef.closed.subscribe((isAccept) => {
            if (!isAccept) return;
            this.deleteMember.emit(param.node.rowIndex);
        });
    }
}
