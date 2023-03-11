import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateEditComponent } from './pages/create-edit/create-edit.component';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CreateEditFormComponent } from './components/create-edit-form/create-edit-form.component';
import { I18nModule } from 'src/app/i18n.module';

@NgModule({
  declarations: [ListComponent, CreateEditComponent, CreateEditFormComponent],
  imports: [
    CommonModule,
    SubscribersRoutingModule,
    I18nModule,
    SharedModule,
    MainLayoutComponent,
  ],
})
export class SubscribersModule {}
