import { Injectable } from '@angular/core';
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
}
