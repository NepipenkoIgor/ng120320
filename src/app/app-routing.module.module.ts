import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './content/signup/signup.component';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
import { AuthGuard } from './auth.guard';
import { CustomPreloadService } from './custom-preload.service';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'backoffice',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule),
    data: {
      title: 'Login page',
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'backoffice'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadService})
  ],
  exports: [RouterModule],
  providers: [AuthGuard, CustomPreloadService]
})
export class AppRoutingModule {
}

