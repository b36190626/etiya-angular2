import type { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // Http isteği gönderilmeden önce araya giriyoruz.

  const token = localStorage.getItem('token')!;
  // Request nesneleri imutable olduğu için klonlamak gerekiyor
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token),
  });
  return next(newReq).pipe(
    catchError((error: any) => {
      console.error('Bir hata oluştu: ', error);
      return throwError(() => new Error('Bir hata oluştu'));
    })
  );
  // rxjs pipe: observable'ı manipüle etmek/araya girmek için kullanılır.
  // observable yapıda araya girecek burada hata varsa hatayı verir
};
