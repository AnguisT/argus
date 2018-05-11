import { Injectable } from '@angular/core';
import { HttpService } from '../../../modules/service/http.service/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArgusDetailService {
    constructor(private httpService: HttpService) {}

    getDataGrid(): Observable<any> {
        return this.httpService.getMock('api/grid');
    }

    getViewGrid(): Observable<any> {
        return this.httpService.getMock('api/view');
    }

    getUserViews(): Observable<any> {
        return this.httpService.getMock('api/userViews');
    }

    getUserView(id: number): Observable<any> {
        return this.httpService.getMock(`api/userView/${id}`);
    }

    getSelectData(): Observable<any> {
        return this.httpService.getMock('api/data');
    }

    getMultiSelectData(): Observable<any> {
        return this.httpService.getMock('api/data1');
    }
}
