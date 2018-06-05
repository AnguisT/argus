import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import {
    ArgusExpansionPanelComponent
} from '../formatter/expansion.panel/argus.expansion.panel.component';
import DevExpress from 'devextreme/bundles/dx.all';
import { DxDataGridComponent } from 'devextreme-angular';
import { ArgusGridComponent } from '../argus.grid.component';
import { ArgusModalComponent } from '../../modal/argus.modal.component';
import { ArgusExportComponent } from '../../export/argus.export.component';

@Injectable()
export class ArgusGridProvider {
    public dataGrid: DxDataGridComponent;
    public gridContext: ArgusGridComponent;

    viewColumnsToGridColumns(cols: any): DevExpress.ui.dxDataGridColumn[] {
        let self = this;
        let gridCols: {
            [key: string]: DevExpress.ui.dxDataGridColumn
        } = {};
        let id = 0;
        $.each(cols, (k, col) => {
            gridCols[k] = <DevExpress.ui.dxDataGridColumn>{
                dataField: col.BindingName,
            };
        });

        let res = <DevExpress.ui.dxDataGridColumn[]>[];

        $.each(gridCols, (k, v) => {
            res.push(v);
        });

        return res;
    }

    getFrozenColumn(columnDefs: Array<any> = []): Array<any> {
        let column = <any>{
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
        let column1 = <any>{
            colId: '-2',
            headerName: 'Formatter check',
            field: 'area',
            width: 400,
            cellRendererFramework: ArgusExpansionPanelComponent,
        };
        columnDefs.unshift(column1);
        return columnDefs;
    }

    openExport() {
        let self = this;
        let dialogRef = this.gridContext.dialog.open(ArgusModalComponent, {
            width: '500px',
            closeOnNavigation: true,
            data: { title: 'Export', buttonTitle: 'Export', component: ArgusExportComponent },
        });
        dialogRef.componentInstance.modalEvents.subscribe((e: any) => {
            if (e.name === 'ok') {
                let nameFile = dialogRef.componentInstance.componentRef.instance.inputString;
                if (self.dataGrid.instance.getSelectedRowsData().length !== 0) {
                    let fileNameExport = self.gridContext.gridConfig.fileNameExport;
                    self.dataGrid.export = {
                        fileName: nameFile === '' ? fileNameExport : nameFile,
                    };
                    self.dataGrid.instance.exportToExcel(true);
                }
                dialogRef.close();
            } else if (e.name === 'close') {
                dialogRef.close();
            }
        });
    }
}
