import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingStateService {
  private loadingState$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  setLoadingState(state: boolean) {
    this.loadingState$.next(state);
  }

  getLoadingState() {
    return this.loadingState$.asObservable();
  }
}
