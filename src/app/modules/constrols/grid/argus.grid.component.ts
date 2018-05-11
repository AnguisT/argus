import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';
import * as $ from 'jquery';
import { GridOptions } from 'ag-grid';

@Component({
    selector: 'argus-grid',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusGridComponent {

    @Input('gridOptions') private gridOptions: GridOptions;

    @Input('rowData') private rowData: Array<any>;

    @Input('columnDefs') private columnDefs: Array<any>;

    @Output() rowDoubleClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output() onGridColumnsChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {
        console.log(1);
    }

    private rowDoubleClickedHandler(p: any) {
        this.rowDoubleClicked.emit(p);
    }

    private rowClickedHandler(p: any) {
        this.rowClicked.emit(p);
    }

    private gridColumnsChanged(e: any) {
        this.onGridColumnsChanged.emit();
    }
}
