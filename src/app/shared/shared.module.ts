import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MATERIAL_MODULES } from './material.index';
import { DialogModule } from './dialog/dialog.module';
import { SmartTableModule } from './smart-table/smart-table.module';
import { SmartFormModule } from './smart-form/smart-form.module';
import { HiddenIfNotLoggedDirective } from '@core/directives/hidden-if-not-logged.directive';

@NgModule({
  declarations: [HiddenIfNotLoggedDirective],
  imports: [
    CommonModule,
    DialogModule,
    SmartTableModule,
    SmartFormModule,
    MATERIAL_MODULES,
  ],
  exports: [
    DialogModule,
    SmartTableModule,
    SmartFormModule,
    HiddenIfNotLoggedDirective,
    MATERIAL_MODULES,
  ],
})
export class SharedModule {}
