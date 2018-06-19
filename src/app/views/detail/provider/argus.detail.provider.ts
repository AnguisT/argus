import { Injectable } from '@angular/core';
import { ArgusDetailService } from '../service/argus.detail.service';
import { ArgusDetailComponent } from '../argus.detail.component';
import { ArgusGridProvider } from '../../../modules/controls/grid/provider/argus.grid.provider';
import { columns } from '../../../constants/constant.columns';

@Injectable()
export class ArgusDetailProvider {
    public compContext: ArgusDetailComponent;
    public gridProvider: ArgusGridProvider;

    constructor(private argusDetailService: ArgusDetailService) {}

    init(id: number) {
        let self = this;
        // this.argusDetailService.getViewGrid().subscribe((view) => {
            let column = self.gridProvider.viewColumnsToGridColumns(columns);
            self.compContext.gridConfig.columnDef = column;
            self.argusDetailService.getDataGrid().subscribe((dataGrid) => {
                self.compContext.gridConfig.rowData = dataGrid;
                self.argusDetailService.getDataGridById(id).subscribe((detail) => {
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
                    self.compContext.dataLoaded.emit();
                });
            });
        // });
    }
}
