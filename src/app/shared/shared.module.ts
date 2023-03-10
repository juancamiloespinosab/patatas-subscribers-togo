import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MATERIAL_MODULES } from './material.index';
import { DialogModule } from './modules/dialog/dialog.module';
import { SmartTableModule } from './modules/smart-table/smart-table.module';
import { SmartFormModule } from './modules/smart-form/smart-form.module';
import { HiddenIfNotLoggedDirective } from './directives/hidden-if-not-logged.directive';

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
