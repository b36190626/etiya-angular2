import type { HttpInterceptorFn } from '@angular/common/http';

export const notfinishedyetInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
