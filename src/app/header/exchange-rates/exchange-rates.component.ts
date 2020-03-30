import { Component, Input } from '@angular/core';

export interface IRate {
  value: number;
  currency: string;
}

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent {

  @Input()
  public bankingRates: IRate[];

  public currentAutoplay = 'on';
  public myDuration = 7000;


}
