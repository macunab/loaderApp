import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from 'rxjs';
import { delay } from 'rxjs/operators'
import { SpinnerService } from "../shared/services/spinner.service";

@Injectable({
    providedIn: 'root'
})
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerService.setLoading(true, req.url);
        
        return next.handle(req)
            .pipe(
                delay(3000),
                finalize(() => this.spinnerService.setLoading(false, req.url)))
    }
}