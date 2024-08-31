import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    private titleCache: BehaviorSubject<string> = new BehaviorSubject<string>(
        '',
    );

    public listenerTitleChange(
        listener: (title: string) => void,
    ): Subscription {
        return this.titleCache.asObservable().subscribe(listener);
    }

    public changeTitle(title: string): void {
        this.titleCache.next(title);
    }

    public getValueTitle(): Observable<string> {
        return this.titleCache.asObservable();
    }
}
