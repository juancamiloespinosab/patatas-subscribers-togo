import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateEditComponent } from './pages/create-edit/create-edit.component';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    SubscribersRoutingModule,
    MainLayoutComponent
  ]
})
export class SubscribersModule { }
