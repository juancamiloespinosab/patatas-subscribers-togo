import {
  Directive,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadingStateService } from '@core/services/app/loading-state.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[showIfLoading]',
})
export class ShowIfLoadingDirective implements OnDestroy {
  loadingStateSubscription!: Subscription;

  constructor(
    private eleRef: ElementRef,
    private loadingState: LoadingStateService
  ) {
    this.loadingStateSubscription = this.loadingState
      .getLoadingState()
      .subscribe((isLoading: boolean) => {
        if (!isLoading) {
          this.eleRef.nativeElement.style.opacity = '0';
          return;
        }

        this.eleRef.nativeElement.style.opacity = '1';
      });
  }

  ngOnDestroy(): void {
    this.loadingStateSubscription?.unsubscribe();
  }
}
