import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { I18nModule } from 'src/app/i18n.module';

@NgModule({
  declarations: [SmartTableComponent, PaginatorComponent, SearchComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    I18nModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  exports: [SmartTableComponent],
})
export class SmartTableModule {}
