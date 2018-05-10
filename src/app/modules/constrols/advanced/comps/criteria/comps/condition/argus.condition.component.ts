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
    selector: 'argus-condition',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusConditionComponent {
    @Input('context') private compContext: ArgusCriteriaComponent;
    @Output() private onSelectCondition: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @ViewChild('select') private select: ArgusSelect2Component;

    constructor(private advancedProvider: ArgusAdvancedProvider) {}

    ngAfterViewInit() {
        let self = this;
        this.compContext.dataReady.subscribe((data: any) => {
            self.select.setData(data);
        });
    }

    onSelect($event: any) {
        this.onSelectCondition.emit($event);
    }
}
