import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './components/dialog/dialog.component';
import { MATERIAL_MODULES } from './material.index';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class SharedModule {}
