import {
    ComponentRef,
    Directive,
    EventEmitter,
    inject,
    Input,
    OnInit,
    Output,
    Type,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[asDynamicView]',
    standalone: true,
})
export class DynamicViewDirective implements OnInit {
    @Input() component: Type<any>;
    @Input() context: any;

    @Output() afterGenerateView = new EventEmitter<ComponentRef<any>>();

    private readonly viewContainerRef = inject(ViewContainerRef);

    ngOnInit(): void {
        if (this.component) {
            this.viewContainerRef.clear();
            const componentRef = this.viewContainerRef.createComponent(
                this.component,
            );
            if (this.context) {
                Object.keys(this.context).forEach((key) => {
                    componentRef.instance[key] = this.context[key];
                });
            }
            this.afterGenerateView.emit(componentRef);
        }
    }
}
