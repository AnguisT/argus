import { Injectable } from '@angular/core';
import { ArgusAdvancedService } from '../service/argus.advanced.service';
import { ArgusAdvancedComponent } from '../argus.advanced.component';
import { Observable } from 'rxjs';

@Injectable()
export class ArgusAdvancedProvider {
    public compContext: ArgusAdvancedComponent;

    constructor(private advancedService: ArgusAdvancedService) {}

    getData() {
        let self = this;
        return Observable.create((observer: any) => {
            this.advancedService.getSelectData().subscribe((data) => {
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
