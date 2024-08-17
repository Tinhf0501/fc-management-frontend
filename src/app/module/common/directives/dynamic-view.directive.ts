import {
    Directive,
    inject,
    Input,
    OnInit,
    Type,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[asDynamicView]',
    standalone: true,
})
export class DynamicViewDirective implements OnInit {
    @Input() component: Type<any>;
    @Input() params: any;

    private readonly viewContainerRef = inject(ViewContainerRef);

    ngOnInit(): void {
        if (this.component) {
            this.viewContainerRef.clear();
            const componentRef = this.viewContainerRef.createComponent(
                this.component,
            );
            if (this.params) {
                Object.keys(this.params).forEach((key) => {
                    componentRef.instance[key] = this.params[key];
                });
            }
        }
    }
}
