import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { DialogComponent } from './components/dialog/dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { I18nModule } from 'src/app/i18n.module';

@NgModule({
  declarations: [DialogComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    I18nModule,
  ],
})
export class DialogModule {}
