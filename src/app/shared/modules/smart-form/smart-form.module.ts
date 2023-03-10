import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartFormComponent } from './components/smart-form/smart-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from 'src/app/i18n.module';
import { DynFieldComponent } from './components/dyn-field/dyn-field.component';

@NgModule({
  declarations: [
    SmartFormComponent,
    DynFieldComponent,
  ],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, I18nModule],
  exports: [SmartFormComponent],
})
export class SmartFormModule {}
