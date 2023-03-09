import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MATERIAL_MODULES } from './material.index';
import { DialogModule } from './dialog/dialog.module';
import { SmartTableModule } from './smart-table/smart-table.module';

@NgModule({
  declarations: [],
  imports: [DialogModule, SmartTableModule, CommonModule, MATERIAL_MODULES],
  exports: [DialogModule, SmartTableModule, MATERIAL_MODULES],
})
export class SharedModule {}
