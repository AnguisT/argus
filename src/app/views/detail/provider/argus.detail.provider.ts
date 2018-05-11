import { Injectable } from '@angular/core';
import { ArgusDetailService } from '../service/argus.detail.service';
import { ArgusDetailComponent } from '../argus.detail.component';
import { ArgusGridProvider } from '../../../modules/constrols/grid/provider/argus.grid.provider';

@Injectable()
export class ArgusDetailProvider {
    public compContext: ArgusDetailComponent;
    public gridProvider: ArgusGridProvider;

    constructor(private argusDetailService: ArgusDetailService) {}

    init() {
        let self = this;
        this.argusDetailService.getViewGrid().subscribe((data) => {
            let column = self.gridProvider.viewColumnsToGridColumns(data);
            let columnDefs = self.gridProvider.getFrozenColumn(column);
            self.compContext.columnDefs = columnDefs;
        });
        this.argusDetailService.getDataGrid().subscribe((data) => {
            self.compContext.rowData = data;
        });
    }
}
