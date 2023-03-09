import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'subscribers',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/subscribers/subscribers.module').then(
        (m) => m.SubscribersModule
      ),
  },
  {
    path: '**',
    redirectTo: 'subscribers',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
