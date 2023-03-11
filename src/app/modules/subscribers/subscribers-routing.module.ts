import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { CreateEditComponent } from './pages/create-edit/create-edit.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: 'list',
    canActivate: [AuthGuard],
    component: ListComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    data: { editMode: false },
    component: CreateEditComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuard],
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
