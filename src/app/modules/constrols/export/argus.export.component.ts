import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as $ from 'jquery';
import { ArgusGridProvider } from '../grid/provider/argus.grid.provider';
import * as XLSX from 'xlsx';

@Component({
    selector: 'argus-export',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusExportComponent {
    private typePage: string = 'all_page';
    private typeExport: string = 'excel';
    private inputString: string = '';
    private provider: ArgusGridProvider;

    constructor(private gridProvider: ArgusGridProvider) {
        this.provider = this.gridProvider;
    }

    export() {
        if (this.typeExport === 'excel') {
            this.exportExcel();
        } else {
            this.exportCSV();
        }
    }

    exportCSV() {
        if (this.typePage === 'all_page' || this.typePage === 'row_selected') {
            let params = {
                onlySelected: this.typePage === 'row_selected',
                fileName: this.inputString === '' ? 'export' : this.inputString,
            };
            this.provider.gridOptions.api.exportDataAsCsv(params);
        } else {
            let json: Array<any> = [];

            json = this.getRowsFromCurrentPage();

            new Angular5Csv(json, this.inputString === '' ? 'export' : this.inputString);
        }
    }

    exportExcel() {
        if (this.typePage === 'all_page') {
            this.exportAllPage();
        } else if (this.typePage === 'current_page') {
            this.exportCurrentPage();
        } else if (this.typePage === 'row_selected') {
            this.exportSelectedRows();
        }
    }

    exportSelectedRows() {
        let json: Array<any> = [];

        let selectedRows = this.provider.gridOptions.api.getSelectedRows();

        this.exportAsExcelFile(selectedRows);
    }

    exportCurrentPage() {
        let json: Array<any> = [];

        json = this.getRowsFromCurrentPage();

        this.exportAsExcelFile(json);
    }

    exportAllPage() {
        let json: Array<any> = [];
        this.provider.gridOptions.api.forEachNode((val) => {
            json.push(val.data);
        });
        this.exportAsExcelFile(json);
    }

    exportAsExcelFile(json: any[]): void {
        // let wscols = [
        //     { width: 20 },
        //     { width: 20 },
        //     { width: 20 },
        //     { width: 20 },
        //     { width: 20 },
        //     { width: 20 },
        //     { width: 20 },
        //     { width: 20 }
        // ];
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        // ws['!cols'] = wscols;
        // ws['!rows'] = [{ hpx: 40 }];
        // ws.A1.s = { alignment: { vertical: 'center', horizontal: 'center' } };
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        let fileNmae = this.inputString === '' ? 'export' : this.inputString;

        XLSX.writeFile(wb, `${fileNmae}.xlsx`, { cellStyles: true });
    }

    getRowsFromCurrentPage() {
        let json: Array<any> = [];

        let currentPage = this.provider.gridOptions.api.paginationGetCurrentPage() + 1;
        let paginationSize = this.provider.gridOptions.api.paginationGetPageSize();
        let countRowEnd = currentPage * paginationSize;
        let countRowStart = countRowEnd - paginationSize;

        this.provider.gridOptions.api.forEachNode((val) => {
            if (val.rowIndex >= countRowStart && val.rowIndex < countRowEnd) {
                json.push(val.data);
            }
        });

        return json;
    }
}
