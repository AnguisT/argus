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
            self.argusStartService.getViewGrid().subscribe((data1) => {
                let column = self.gridProvider.viewColumnsToGridColumns(data1);
                let columns1 = self.gridProvider.viewColumnsToGridColumns1(data1);
                self.compContext.columnDefs = self.gridProvider.getFrozenColumn(column);
                self.compContext.gridConfig.columnDef = columns1;
                self.argusStartService.getDataGrid().subscribe((data2) => {
                    self.compContext.gridConfig.rowData = data2;
                    self.compContext.isLoaded = true;
                    self.compContext.dataLoaded.emit();
                });
            });
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
