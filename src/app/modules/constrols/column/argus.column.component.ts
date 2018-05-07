import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter,
    Inject,
    ViewContainerRef,
    ChangeDetectorRef
} from '@angular/core';
import * as $ from 'jquery';
import { ArgusGridProvider } from '../grid/provider/argus.grid.provider';
import { ColDef } from 'ag-grid';
import { MatCheckboxChange } from '@angular/material';
import { ArgusColumnService } from './service/argus.column.service';

@Component({
    selector: 'argus-column',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ArgusColumnService
        // {provide: ArgusGridProvider, useValue: ArgusGridProvider}
    ]
})

export class ArgusColumnComponent {
    private columnsList: Array<any> = [];
    private filterColumnsList: Array<any> = [];
    private data: any;
    private provider: ArgusGridProvider;
    private actualColumn: any = [];
    private columns: ColDef[];
    private inputString: string;

    constructor(private cdr: ChangeDetectorRef,
                private gridProvider: ArgusGridProvider,
                private argusColumnService: ArgusColumnService) {}

    ngOnInit() {
        this.provider = this.gridProvider;
        this.getColumnGrid();
    }

    getColumnGrid() {
        let self = this;
        this.argusColumnService.getViewGrid().subscribe((data) => {
            self.data = data;
            self.columns = this.gridProvider.viewColumnsToGridColumns(this.data);

            $.each(data, (k, col) => {
                let cols = {
                    selected: false,
                    template: col.TemplateName,
                };
                self.columnsList.push(cols);
            });

            this.checkColumn();

            self.filterColumnsList = self.columnsList;

            self.cdr.markForCheck();
        });
    }

    checkColumn() {
        let self = this;
        let columns = this.provider.gridOptions.columnApi.getAllColumns();
        let filterColumnsLists = self.columnsList.filter((arr) => {
            let flag = false;
            columns.forEach((col, i) => {
                let name = col.getColDef().headerName;
                if (arr.template === name) {
                    flag = true;
                    arr.selected = true;
                }
            });
            return flag;
        });
        this.columnsList.map((arr) => {
            if (arr.selected) {
                return arr;
            }
        });
    }

    selectColumn(item: any, $event: MatCheckboxChange, i: number) {
        this.columnsList[i].selected = !item.selected;
        let self = this;
        let actualColumns = this.gridProvider.gridOptions.columnApi.getAllColumns();
        let newColumns: Array<any>;

        newColumns = self.columnsList.filter((colL) => {
            if (colL.selected) {
                return true;
            }
        });

        this.actualColumn = this.columns.filter((col) => {
            let flag = false;
            newColumns.forEach((aCol: any) => {
                let name = aCol.template;
                if (col.headerName === name) {
                    flag = true;
                }
            });
            return flag;
        });

        this.gridProvider.gridOptions.columnDefs = this.gridProvider.getFrozenColumn(this.actualColumn);
    }

    filterColumns() {
        let self = this;
        let columnMap = this.filterColumnsList.filter((col) => {
            let temp = col.template.toLowerCase();
            let input = self.inputString.toLowerCase();
            if (temp.indexOf(input) !== -1) {
                return true;
            }
        });
        this.columnsList = columnMap;
    }
}
