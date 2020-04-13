import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { SharedModule } from '../../shared/shared.module';
import { backOfficeRoutes } from './backoffice.routes';


@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SidenavComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],
  imports: [
    SharedModule.forChild(),
    RouterModule.forChild([{
      path: '',
      component: BackofficeComponent,
      children: backOfficeRoutes
    }])
  ]
})
export class BackofficeModule {
}
