import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import {
    GridApi,
    GridReadyEvent,
    GridSizeChangedEvent,
    ColDef,
    GridOptions,
} from 'ag-grid-community';

@Component({
    template: '',
})
export abstract class GridCore<T> implements OnInit, OnDestroy {
    protected columnDefs: ColDef[];
    protected gridOptions: GridOptions;
    @Input() rowData: T[];

    protected unsubscribe$: Subject<void> = new Subject<void>();
    protected agGridApi: GridApi;
    protected translateService: TranslateService = inject(TranslateService);

    public ngOnInit(): void {
        this.listenLangChange();
        this.columnDefs = this.getColumnDefs();
        this.rowData = this.rowData ?? this.getRowData();
    }

    private listenLangChange(): void {
        this.translateService.onLangChange
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((lang) => {
                this.agGridApi.refreshHeader();
            });
    }

    public onGridReady(param: GridReadyEvent): void {
        this.agGridApi = param.api;
        this.agGridApi.sizeColumnsToFit();
    }

    public onGridSizeChanged(param: GridSizeChangedEvent): void {
        param.api.sizeColumnsToFit();
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public abstract getColumnDefs(): ColDef[];
    public abstract getRowData(): T[];
}
