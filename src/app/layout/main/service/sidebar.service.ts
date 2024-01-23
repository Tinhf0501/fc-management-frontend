import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    private collapseSidebarMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public toggleSidebar(): void {
        const status = this.collapseSidebarMobile.getValue();
        this.collapseSidebarMobile.next(!status);
    }

    public listenSidebarChange(listener: (status: boolean) => void): Subscription {
        return this.collapseSidebarMobile.asObservable()
            .subscribe(listener);
    }

    public getSidebarStatus(): Observable<boolean> {
        return this.collapseSidebarMobile.asObservable();
    }
}