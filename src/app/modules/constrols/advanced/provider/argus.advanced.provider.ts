import { Injectable } from '@angular/core';
import { ArgusAdvancedService } from '../service/argus.advanced.service';
import { ArgusAdvancedComponent } from '../argus.advanced.component';
import { Observable } from 'rxjs';

@Injectable()
export class ArgusAdvancedProvider {
    public compContext: ArgusAdvancedComponent;

    constructor(private advancedService: ArgusAdvancedService) {}

    init() {
        let self = this;
        this.advancedService.getControls().subscribe((controls) => {
            self.advancedService.getAdvanced().subscribe((advanced) => {
                self.compContext.crit.control = controls;
                self.compContext.advanced = advanced;
            });
        });
    }

    getData() {
        let self = this;
        return Observable.create((observer: any) => {
            self.advancedService.getSelectData().subscribe((data) => {
                observer.next(data);
            });
        });
    }

    getDataById(id: number) {
        let self = this;
        return Observable.create((observer: any) => {
            this.advancedService.getSelectDataById(id).subscribe((data) => {
                observer.next(data);
            });
        });
    }
}
