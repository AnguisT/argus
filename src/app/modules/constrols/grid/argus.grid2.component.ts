import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter,
    TemplateRef
} from '@angular/core';
import * as $ from 'jquery';
import { TableColumn, DatatableComponent } from '@swimlane/ngx-datatable';
import 'style-loader!@swimlane/ngx-datatable/release/index.css';
import 'style-loader!@swimlane/ngx-datatable/release/themes/material.css';
import 'style-loader!@swimlane/ngx-datatable/release/assets/icons.css';

@Component({
    selector: 'argus-grid2',
    templateUrl: './tpl/grid.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusGrid2Component {
    @ViewChild('hdrCh') private headerCheckbox: TemplateRef<any>;

    @ViewChild('rowCh') private rowCheckbox: TemplateRef<any>;

    @ViewChild('dataTable') private dataTable: DatatableComponent;

    @Input('rowData') private rowData: Array<any>;

    @Input('columnDefs') private columnDefs: Array<TableColumn>;

    @Output() rowDoubleClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output() onGridColumnsChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.rowData = [
            { name: 'Austinasdasdasdasdasdasdasdasd', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
            { name: 'Austinasdasdasdasdasdasdasdasd', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
            { name: 'Austinasdasdasdasdasdasdasdasd', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
            { name: 'Austinasdasdasdasdasdasdasdasd', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
            { name: 'Austinasdasdasdasdasdasdasdasd', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
            { name: 'Austinasdasdasdasdasdasdasdasd', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
        ];
    }

    ngOnInit() {
        this.columnDefs = <Array<TableColumn>>[
            {
                $$id: '-1',
                width: 55,
                sortable: false,
                canAutoResize: false,
                draggable: false,
                resizeable: false,
                headerTemplate: this.headerCheckbox,
                cellTemplate: this.rowCheckbox
                // headerCheckboxable: true,
                // checkboxable: true,
            },
            {
                $$id: '1',
                prop: 'name',
                canAutoResize: true,
            },
            {
                $$id: '2',
                prop: 'gender',
                canAutoResize: true,
            },
            {
                $$id: '3',
                prop: 'company',
                canAutoResize: true,
            },
        ];

        this.dataTable.columns = this.columnDefs;
        this.dataTable.rows = this.rowData;
        // this.dataTable.groupedRows = [
        //     {groupid: 1} [
        //         {id: 1, name: "name"},
        //         {id: 2, name: "gender"},
        //     ],
        // ];
    }

    toggleExpandGroup(group: any) {
        console.log('Toggled Expand Group!', group);
        this.dataTable.groupHeader.toggleExpandGroup(group);
    }

    onDetailToggle(event: any) {
        console.log('Detail Toggled', event);
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
