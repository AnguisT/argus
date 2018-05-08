import { Injectable } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid';
import {
    ArgusExpansionPanelFormatterComponent
} from '../formatter/expansion.panel/argus.expansion.panel.component';

@Injectable()
export class ArgusGridProvider {
    public gridOptions: GridOptions;
    constructor() {}

    viewColumnsToGridColumns(cols: any): ColDef[] {
        let gridCols: {
            [key: string]: ColDef
        } = {};
        let id = 0;
        $.each(cols, (k, col) => {
            gridCols[k] = <ColDef>{
                id: (<number>id++),
                headerName: col.TemplateName,
                field: col.BindingName,
                width: 150,
                suppressResize: !col.CanUserResize,
                suppressSorting: !col.CanUserSort,
            };
        });

        let res = <any>[];

        $.each(gridCols, (k, v) => {
            res.push(v);
        });

        return res;
    }

    getFrozenColumn(columnDefs: Array<ColDef> = []): Array<ColDef> {
        let column = <ColDef>{
            colId: '-1',
            headerName: '',
            field: 'checkbox',
            width: 70,
            checkboxSelection: true,
            headerCheckboxSelection: true,
            suppressSorting: true,
            suppressMovable: true,
            suppressResize: true,
        };
        columnDefs.unshift(column);
        let column1 = <ColDef>{
            colId: '-2',
            headerName: 'Formatter check',
            field: 'area',
            width: 70,
            cellRendererFramework: ArgusExpansionPanelFormatterComponent,
        };
        columnDefs.unshift(column1);
        return columnDefs;
    }
}
