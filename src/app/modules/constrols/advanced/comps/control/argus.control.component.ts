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
    selector: 'argus-control',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusControlComponent {
    @Output('onSelectControl') private onSelectControl: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @ViewChild('select') private select: ArgusSelect2Component;

    constructor(private advancedProvider: ArgusAdvancedProvider) {}

    ngAfterViewInit() {
        let self = this;
        this.advancedProvider.getData().subscribe((data: any) => {
            self.select.setData(data);
        });
    }

    onSelect($event: any) {
        this.onSelectControl.emit($event);
    }
}
