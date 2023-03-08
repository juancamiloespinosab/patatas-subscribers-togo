import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'subscribers',
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
