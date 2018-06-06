/**
 * Created by Pavel on 16.03.2017.
 */

import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ArgusRouterReuseStrategy implements RouteReuseStrategy {

    private reservedUrls = [
        /detail/,
    ];

    private handlers: { [key: string]: DetachedRouteHandle } = {};

    constructor() {
    }

    private clearCacheByUrl(url: string) {
      delete this.handlers[url];
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        let url = route.url.join('/') || route.parent.url.join('/');
        for (let reservedUrl of this.reservedUrls) {
            if (reservedUrl.test(url)) {
                return;
            }
        }
        return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        let url = route.url.join('/') || route.parent.url.join('/');
        this.handlers[url] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        let url = route.url.join('/') || route.parent.url.join('/');
        for (let reservedUrl of this.reservedUrls) {
            if (reservedUrl.test(url)) {
                return false;
            }
        }
        return !!route.routeConfig && !!this.handlers[url];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) return null;
        return this.handlers[route.url.join('/') || route.parent.url.join('/')];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

}
