import { Injectable } from '@angular/core';
import { ArgusDetailService } from '../service/argus.detail.service';
import { ArgusDetailComponent } from '../argus.detail.component';
import { ArgusGridProvider } from '../../../modules/constrols/grid/provider/argus.grid.provider';

@Injectable()
export class ArgusDetailProvider {
    public compContext: ArgusDetailComponent;
    public gridProvider: ArgusGridProvider;

    constructor(private argusDetailService: ArgusDetailService) {}

    init(id: number) {
        let self = this;
        this.argusDetailService.getViewGrid().subscribe((data) => {
            let column = self.gridProvider.viewColumnsToGridColumns(data);
            let columnDefs = self.gridProvider.getFrozenColumn(column);
            self.compContext.columnDefs = columnDefs;
            self.argusDetailService.getDataGrid().subscribe((dataGrid) => {
                self.compContext.rowData = dataGrid;
                self.argusDetailService.getDataGridById(id).subscribe((detail) => {
                    // self.compContext.detail = detail;
                    let arrayDetail: Array<any> = [];
                    $.each(detail, (key, value) => {
                        let detal = {
                            title: key,
                            val: value,
                        };
                        arrayDetail.push(detal);
                    });
                    self.compContext.details = arrayDetail;
                    self.compContext.isLoaded = true;
                });
            });
        });
    }
}
