import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, Scroll, ActivatedRoute } from '@angular/router';
import { Observable, Subject, filter, takeUntil, map } from 'rxjs';
import { SidebarService } from './service/sidebar.service';

@Component({
    selector: 'main-layout',
    templateUrl: './main.layout.html',
    styleUrls: ['./main.layout.scss'],
})
export class MainLayout implements OnInit, OnDestroy {
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private router: Router = inject(Router);
    private sidebarService: SidebarService = inject(SidebarService);
    private unsubscribe$: Subject<void> = new Subject();

    public title$: Observable<string> = this.sidebarService.getValueTitle();

    public ngOnInit(): void {
        this.router.events
            .pipe(
                filter(
                    (res) =>
                        res instanceof NavigationEnd || res instanceof Scroll,
                ),
                map((res) => this.activatedRoute.snapshot.firstChild.data),
                takeUntil(this.unsubscribe$),
            )
            .subscribe((data) => {
                this.sidebarService.changeTitle(data.title ?? '');
            });
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
