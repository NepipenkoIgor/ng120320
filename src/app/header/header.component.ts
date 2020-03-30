import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IRate } from './exchange-rates/exchange-rates.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public mainTitle;

  @Input()
  public drawer: MatSidenav;

  public rates: IRate[] = [
    {value: 100 , currency: 'EUR'},
    {value: 80 , currency: 'USD'},
    {value: 0.3 , currency: 'RUB'},
  ];

  public toggleDrawer() {
    this.drawer.toggle();
  }

}
