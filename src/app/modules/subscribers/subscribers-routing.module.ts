import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditComponent } from './pages/create-edit/create-edit.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'create',
    data: { editMode: false },
    component: CreateEditComponent,
  },
  {
    path: 'edit/:id',
    data: { editMode: true },
    component: CreateEditComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribersRoutingModule {}
