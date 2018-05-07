import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../service/http.service/http.service';

@Injectable()
export class ArgusColumnService {
    constructor(private httpService: HttpService) {}

    getViewGrid(): Observable<any> {
        return this.httpService.getMock('api/view');
    }
}
