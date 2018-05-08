import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    ViewChild,
    EventEmitter,
    Output
} from '@angular/core';
import { ArgusSelect2Component } from '../../../select2/argus.select2.component';
import { ArgusAdvancedProvider } from '../../provider/argus.advanced.provider';

@Component({
    selector: 'argus-field',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusFieldComponent {
    @Output('onSelectField') private onSelectField: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @ViewChild('select') private select: ArgusSelect2Component;

    constructor(private advancedProvider: ArgusAdvancedProvider) {}

    ngAfterViewInit() {
        let self = this;
    }

    onSelect($event: any) {
        this.onSelectField.emit($event);
    }
}
