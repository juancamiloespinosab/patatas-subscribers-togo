import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { SmartTableComponent } from './components/smart-table/smart-table.component';

@NgModule({
  declarations: [SmartTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [SmartTableComponent],
})
export class SmartTableModule {}
