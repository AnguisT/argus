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
import * as $ from 'jquery';

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
    public dataConditionReady: EventEmitter<any> = new EventEmitter<any>();
    public dataFieldReady: EventEmitter<any> = new EventEmitter<any>();
    private compContext: ArgusCriteriaComponent;
    @Output() private onRemoveCriteria: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @Input('advanced') private advanced: any;

    constructor(private advancedProvider: ArgusAdvancedProvider,
                private cdr: ChangeDetectorRef) {
        this.compContext = this;
    }

    ngOnInit() {
        // let self = this;
        // // this.advancedProvider.getData().subscribe((data: any) => {
        // //     // self.data.dataControl = data;
        // //     self.dataControlReady.emit(data);
        // //     self.onSelect(1);
        // // });
        // console.log(this.data);
    }

    onSelect($event: any) {
        let dataField;
        let data: Array<any> = [];

        if ($event[0].dbField) {
            let field: Array<any> = [];

            $.each(this.advanced, (i, val) => {
                if (i === $event[0].dbField) {
                    field = val;
                }
            });

            field.forEach((val: any) => {
                data.push({id: val.ID, text: val.Name});
            });
        }

        let conditions: Array<any> = [];

        $.each(this.advanced.conditions, (i, val) => {
            if (i === $event[0].EditorType) {
                conditions = val;
            }
        });


        let dataConditions: Array<any> = [];
        let id = 1;

        conditions.forEach((cond: any) => {
            dataConditions.push({id: id, text: cond});
            id++;
        });

        dataField = {
            data: data,
            type: $event[0].EditorType,
        };

        this.dataConditionReady.emit(dataConditions);
        this.dataFieldReady.emit(dataField);

        this.cdr.detectChanges();
    }

    onSelectCondition($event: any) {

    }

    onSelectField($event: any) {

    }

    removeCriteria($event: any) {
        this.onRemoveCriteria.emit($event);
    }
}
