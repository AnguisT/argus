import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

import { ArgusStartService } from '../service/argus.start.service';
import { ArgusStartComponent } from '../argus.start.component';
import { ArgusGridProvider } from '../../../modules/constrols/grid/provider/argus.grid.provider';

@Injectable()
export class ArgusStartProvider {
    public compContext: ArgusStartComponent;
    public gridProvider: ArgusGridProvider;

    constructor(private argusStartService: ArgusStartService) {}

    init() {
        let self = this;
        this.argusStartService.getUserViews().subscribe((data) => {
            self.compContext.views = data;
        });
        this.argusStartService.getViewGrid().subscribe((data) => {
            let column = self.gridProvider.viewColumnsToGridColumns(data);
            self.compContext.columnDefs = self.gridProvider.getFrozenColumn(column);
        });
        this.argusStartService.getDataGrid().subscribe((data) => {
            self.compContext.rowData = data;
        });
        this.argusStartService.getSelectData().subscribe((data) => {
            self.compContext.data = data;
        });
        this.argusStartService.getMultiSelectData().subscribe((data) => {
            self.compContext.data1 = data;
        });
    }

    onSelect(id: any) {
        let self = this;
        this.argusStartService.getUserView(id).subscribe((data) => {
            let column = self.gridProvider.viewColumnsToGridColumns(data.columns);
            self.compContext.columnDefs = self.gridProvider.getFrozenColumn(column);
            self.compContext.gridOptions.api.refreshCells();
        });
    }

    exportData() {
        let json: Array<any> = [];
        this.gridProvider.gridOptions.api.forEachNode((val) => {
            json.push(val.data);
        });
        // console.log(this.gridProvider.gridOptions.api.paginationGetCurrentPage());
        // console.log(json);
        this.exportAsExcelFile(json, 'testexport');
    }

    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        ws.A1.s = { bgColor: { indexed: 64 } };
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        XLSX.writeFile(wb, 'testexport.xlsx');
    }
}
