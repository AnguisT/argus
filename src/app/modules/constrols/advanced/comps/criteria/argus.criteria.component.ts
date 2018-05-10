import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    ViewChild,
    EventEmitter,
    Output,
    ChangeDetectorRef
} from '@angular/core';
import { ArgusSelect2Component } from '../../../select2/argus.select2.component';
import { ArgusAdvancedProvider } from '../../provider/argus.advanced.provider';

@Component({
    selector: 'argus-criteria',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusCriteriaComponent {
    public dataReady: EventEmitter<any> = new EventEmitter<any>();
    public dataControlReady: EventEmitter<any> = new EventEmitter<any>();
    private compContext: ArgusCriteriaComponent;
    @Output() private onRemoveCriteria: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;

    constructor(private advancedProvider: ArgusAdvancedProvider,
                private cdr: ChangeDetectorRef) {
        this.compContext = this;
    }

    ngOnInit() {
        let self = this;
        this.advancedProvider.getData().subscribe((data: any) => {
            // self.data.dataControl = data;
            self.dataControlReady.emit(data);
            self.onSelect(1);
        });
    }

    onSelect($event: any) {
        let self = this;
        this.advancedProvider.getDataById($event).subscribe((data: any) => {
            // self.data.dataCondition = [data];
            // self.data.dataField = [data];
            self.dataReady.emit([data]);
            self.cdr.markForCheck();
        });
    }

    onSelectCondition($event: any) {

    }

    onSelectField($event: any) {

    }

    removeCriteria($event: any) {
        this.onRemoveCriteria.emit($event);
    }
}
