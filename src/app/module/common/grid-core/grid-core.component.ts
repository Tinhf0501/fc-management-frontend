import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject, takeUntil } from "rxjs";
import {
    GridApi,
    GridReadyEvent,
    GridSizeChangedEvent,
} from 'ag-grid-community';

@Component({
    template: ''
})
export class GridCore implements OnInit, OnDestroy {

    protected unsubscribe$: Subject<void> = new Subject<void>();
    protected agGridApi: GridApi;
    protected translateService: TranslateService = inject(TranslateService);

    public ngOnInit(): void {
        this.translateService.onLangChange
            .pipe(
                takeUntil(this.unsubscribe$),
            )
            .subscribe(lang => {
                this.agGridApi.refreshHeader();
            })
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
}