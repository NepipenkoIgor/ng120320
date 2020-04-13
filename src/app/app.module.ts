import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductsService } from './content/backoffice/content/products/products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { BASE_URL_TOKEN } from './config';
import { CustomInterceptorService } from './custom-interceptor.service';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module.module';
import { CartModule } from './content/backoffice/content/cart/cart.module';
import { ProductsModule } from './content/backoffice/content/products/products.module';
import { ProductsComponent } from './content/backoffice/content/products/products.component';
import { CartComponent } from './content/backoffice/content/cart/cart.component';
// NgModule, Directive, Pipe, Service
// declarations - let, const
// imports - import
// exports  - export
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [], // Module,  Pipe, Directive
  bootstrap: [AppComponent]
})
export class AppModule {
}
