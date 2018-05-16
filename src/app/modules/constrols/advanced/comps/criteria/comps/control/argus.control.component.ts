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
    selector: 'argus-control',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusControlComponent {
    @Input('context') private compContext: ArgusCriteriaComponent;
    @Output('onSelectControl') private onSelectControl: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @ViewChild('select') private select: ArgusSelect2Component;

    constructor(private advancedProvider: ArgusAdvancedProvider) {}

    ngAfterViewInit() {
        let self = this;
        let selectData: Array<any> = [];
        this.data.forEach((element: any) => {
            selectData.push({id: element.id, text: element.Name});
        });
        // this.compContext.dataControlReady.subscribe((data: any) => {
        this.select.setData(selectData);
        this.select.setSelectedById(1);
        // });
    }

    onSelect($event: any) {
        let selectedControl = this.data.filter((control: any) => {
            if (control.id.toString() === $event) {
                return true;
            }
            return false;
        });
        this.onSelectControl.emit(selectedControl);
    }
}
