import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, Subject } from 'rxjs';
import { LoadingStateService } from '@core/services/app/loading-state.service';

@Injectable()
export class LoadingStateInterceptor implements HttpInterceptor {
  constructor(private loadingStateService: LoadingStateService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingStateService.setLoadingState(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingStateService.setLoadingState(false);
      })
    );
  }
}
