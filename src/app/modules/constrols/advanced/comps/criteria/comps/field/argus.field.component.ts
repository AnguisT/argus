import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    ViewChild,
    EventEmitter,
    Output
} from '@angular/core';
import { ArgusSelect2Component } from '../../../../../select2/argus.select2.component';
import { ArgusAdvancedProvider } from '../../../../provider/argus.advanced.provider';
import { ArgusCriteriaComponent } from '../../argus.criteria.component';

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
    @Input('context') private compContext: ArgusCriteriaComponent;
    @Output('onSelectField') private onSelectField: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @ViewChild('select') private select: ArgusSelect2Component;

    constructor(private advancedProvider: ArgusAdvancedProvider) {}

    ngOnInit() {
        let self = this;
        this.compContext.dataReady.subscribe((data: any) => {
            self.select.setData(data);
        });
    }

    onSelect($event: any) {
        this.onSelectField.emit($event);
    }
}
