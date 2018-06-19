import { Injectable } from '@angular/core';

import { ArgusStartService } from '../service/argus.start.service';
import { ArgusStartComponent } from '../argus.start.component';
import { ArgusGridProvider } from '../../../modules/controls/grid/provider/argus.grid.provider';
import { columns } from '../../../constants/constant.columns';

@Injectable()
export class ArgusStartProvider {
    public compContext: ArgusStartComponent;
    public gridProvider: ArgusGridProvider;

    constructor(private argusStartService: ArgusStartService) {}

    init() {
        let self = this;
        // self.argusStartService.getViewGrid().subscribe((view) => {
            let column = self.gridProvider.viewColumnsToGridColumns(columns);
            self.compContext.gridConfig.columnDef = column;
            self.argusStartService.getDataGrid().subscribe((dataGrid) => {
                self.compContext.gridConfig.rowData = dataGrid;
                self.compContext.isLoaded = true;
                self.compContext.dataLoaded.emit();
            });
        // });
    }
}
