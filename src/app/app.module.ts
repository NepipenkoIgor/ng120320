import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { ProductsService } from './products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { BASE_URL_TOKEN } from './config';
import { CustomInterceptorService } from './custom-interceptor.service';
// NgModule, Directive, Pipe, Service
// declarations - let, const
// imports - import
// exports  - export
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective // Pipe, Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true},
    ProductsService,
    {provide: BASE_URL_TOKEN, useValue: environment.baseUrl},
    {provide: 'baseUrl', useValue: 'http://some.url'}
  ],
  exports: [], // Module,  Pipe, Directive
  bootstrap: [AppComponent]
})
export class AppModule {
}
