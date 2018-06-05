import { Injectable } from '@angular/core';
import { HttpService } from '../../../modules/service/http.service/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArgusStartService {
    constructor(private httpService: HttpService) {}

    getDataGrid(): Observable<any> {
        return this.httpService.getMock('api/grid');
    }

    getViewGrid(): Observable<any> {
        return this.httpService.getMock('api/view');
    }
}
