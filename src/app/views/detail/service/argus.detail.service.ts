import { Injectable } from '@angular/core';
import { HttpService } from '../../../modules/service/http.service/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArgusDetailService {
    constructor(private httpService: HttpService) {}

    getDataGrid(): Observable<any> {
        this.httpService.get('https://api.myjson.com/bins/p99eu').subscribe((getHttp) => {
            console.log(getHttp.json());
        });
        return this.httpService.getMock('api/grid');
    }

    getDataGridById(id: number): Observable<any> {
        return this.httpService.getMock(`api/grid/${id}`);
    }

    getViewGrid(): Observable<any> {
        return this.httpService.getMock('api/view');
    }
}
