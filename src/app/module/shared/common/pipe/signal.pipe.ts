import { Pipe, PipeTransform, signal, Signal } from "@angular/core";

@Pipe({
    name: 'signal',
    standalone: true
})
export class SignalPipe implements PipeTransform {

    transform<T>(value: T): Signal<T> {
        return signal(value);
    }
}