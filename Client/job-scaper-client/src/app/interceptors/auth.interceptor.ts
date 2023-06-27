import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refresh = false;
  constructor(private service: SharedService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.service.accessToken}`
      }
    });
    return next.handle(req).pipe(catchError((err:HttpErrorResponse) => {
      if(err.status==401 && !this.refresh){
        this.refresh = true;
        return this.service.refresh().pipe(
          switchMap((res:any)=>{
            this.service.accessToken = res.token;
            return next.handle(request.clone({
              setHeaders:{
                Authorization: `Bearer ${this.service.accessToken}`
              }
            }));
          })
        )
      }
      this.refresh = false;
      return throwError(()=>err);
    }));
  }
}
