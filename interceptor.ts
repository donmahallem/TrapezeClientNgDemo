import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { flatMap } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.digestMessage("mieheg" + navigator.userAgent))
            .pipe(flatMap((val) => {
                const data: any = {};
                let key: any = "ontizarihoutA".match(/.{1,2}/g);
                key = key.flatMap((a) => { return a.split("").reverse() }).reverse().join("");
                data[key] = val;
                request = request.clone({
                    setHeaders: data
                });
                return next.handle(request);
            }));
    }
    async digestMessage(message) {
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    }

}