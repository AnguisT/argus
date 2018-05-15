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
                self.compContext.columnDefs = self.gridProvider.getFrozenColumn(column);
                self.argusStartService.getDataGrid().subscribe((data2) => {
                    self.compContext.rowData = data2;
                    self.argusStartService.getSelectData().subscribe((data3) => {
                        self.compContext.data = data3;
                        self.argusStartService.getMultiSelectData().subscribe((data4) => {
                            self.compContext.data1 = data4;
                            self.compContext.isLoaded = true;
                        });
                    });
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
