import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { finalize, Observable, Subject, tap } from 'rxjs';
import { SnackbarService } from '@core/services/app/snackbar.service';

@Injectable()
export class ApiResponseMessagesInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackbarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {},
        error: (error) => {
          console.log(error);

          this.snackBarService.openSnackBar(
            `${error.status} | ${error.error?.Message ?? ''} ${
              error.error?.error ?? ''
            }`
          );
        },
      })
    );
  }
}
