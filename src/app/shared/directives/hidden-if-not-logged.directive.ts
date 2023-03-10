import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '@core/services/app/auth.service';

@Directive({
  selector: '[hiddenIfNotLogged]',
})
export class HiddenIfNotLoggedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
    if (!this.authService.isAuthenticated()) {
      this.viewContainer.clear();
      return;
    }

    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
