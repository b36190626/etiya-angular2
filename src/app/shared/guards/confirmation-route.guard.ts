import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptor = {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        ToastrService.arguments(errorMessage, 'HTTP Error');
        return throwError(errorMessage);
      })
      // return next(newReq).pipe(
      //   catchError((error: any) => {
      //     console.error('Bir hata oluştu: ', error);
      //     return throwError(() => new Error('Bir hata oluştu'));
      //   })
      // );
      // rxjs pipe: observable'ı manipüle etmek/araya girmek için kullanılır.
      // observable yapıda araya girecek burada hata varsa hatayı verir
    );
  }
};
