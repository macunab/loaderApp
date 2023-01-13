import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { SpinnerService } from "../shared/services/spinner.service";

@Injectable({
    providedIn: 'root'
})
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerService.show();
        
        console.log('Paso por le interceptor');
        return next.handle(req)
            .pipe(
                finalize(() => {
                    //this.spinnerService.hide();
                    console.log(`EL SPINNER ESTA: ${this.spinnerService.isLoading}`)
                })
            );
    }

}