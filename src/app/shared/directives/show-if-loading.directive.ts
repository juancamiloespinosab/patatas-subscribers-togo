import {
  Directive,
  ElementRef,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadingStateService } from '@core/services/app/loading-state.service';

@Directive({
  selector: '[showIfLoading]',
})
export class ShowIfLoadingDirective {
  constructor(
    private eleRef: ElementRef,
    private loadingState: LoadingStateService
  ) {
    this.loadingState.getLoadingState().subscribe((isLoading: boolean) => {
      if (!isLoading) {
        this.eleRef.nativeElement.style.opacity = '0';
        return;
      }

      this.eleRef.nativeElement.style.opacity = '1';
    });
  }
}
