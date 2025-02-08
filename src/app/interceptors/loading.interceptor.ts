// import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { LoadingService } from '../services/loading.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {
//   constructor(private loadingService: LoadingService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.loadingService.loadingOn(); // Show loader

//     return next.handle(req).pipe(
//       finalize(() => this.loadingService.loadingOff()) // Hide loader when request completes
//     );
//   }
// }

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.loadingOn(); // ✅ Show loader when request starts

  return next(req).pipe(
    finalize(() => loadingService.loadingOff()) // ✅ Hide loader when request completes
  );
};
