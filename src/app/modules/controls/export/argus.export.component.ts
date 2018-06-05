import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
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
    private typePage: string = 'current_page';
    private inputString: string = '';
    private provider: ArgusGridProvider;

    // constructor(private gridProvider: ArgusGridProvider) {
    //     this.provider = this.gridProvider;
    // }

    // export() {
    //     this.exportExcel();
    // }

    // exportExcel() {
    //     if (this.typePage === 'current_page') {
    //         this.exportCurrentPage();
    //     } else if (this.typePage === 'row_selected') {
    //         this.exportSelectedRows();
    //     }
    // }

    // exportSelectedRows() {
    //     let json: Array<any> = [];

    //     let selectedRows = this.provider.dataGrid.instance.getSelectedRowsData();

    //     this.exportAsExcelFile(selectedRows);
    // }

    // exportCurrentPage() {
    //     let json: Array<any> = [];

    //     json = this.getRowsFromCurrentPage();

    //     this.exportAsExcelFile(json);
    // }

    // exportAsExcelFile(json: any[]): void {
    //     const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    //     const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    //     let fileNmae = this.inputString === '' ? 'export' : this.inputString;

    //     XLSX.writeFile(wb, `${fileNmae}.xlsx`, { cellStyles: true });
    // }

    // getRowsFromCurrentPage() {
    //     let json: Array<any> = [];

    //     json = this.provider.dataGrid.instance.getDataSource().items();

    //     console.log(json);

    //     return json;
    // }
}
