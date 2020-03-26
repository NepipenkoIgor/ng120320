import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
// NgModule, Directive, Pipe, Service
// declarations - let, const
// imports - import
// exports  - export
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent // Pipe, Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [], // Module,  Pipe, Directive
  bootstrap: [AppComponent]
})
export class AppModule { }
