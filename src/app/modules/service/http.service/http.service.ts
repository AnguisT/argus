import { Injectable } from '@angular/core';
import {
    Headers,
    Http,
    Response,
    RequestOptionsArgs
} from '@angular/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions: RequestOptionsArgs = {
    headers: new Headers({ 'Content-Type': 'application/json' })
};

const httpOptionsMock = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {

    constructor(private _http: Http,
                private _httpMock: HttpClient) {
    }

    public get(url: string): Observable<Response> {
        return this._http.get(url);
    }

    public post(url: string, body: string): Observable<Response> {
        return this._http.post(url, body, httpOptions);
    }

    public put(url: string, body: string): Observable<Response> {
        return this._http.put(url, body, httpOptions);
    }

    public remove(url: string): Observable<Response> {
        return this._http.delete(url, httpOptions);
    }

    public getMock(url: string): Observable<Object> {
        return this._httpMock.get(url);
    }

    public postMock(url: string, body: string): Observable<Object> {
        return this._httpMock.post(url, body, httpOptionsMock);
    }

    public putMock(url: string, body: string): Observable<Object> {
        return this._httpMock.put(url, body, httpOptionsMock);
    }

    public removeMock(url: string): Observable<Object> {
        return this._httpMock.delete(url, httpOptionsMock);
    }
}
