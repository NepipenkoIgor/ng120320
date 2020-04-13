import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IRate } from './exchange-rates.component';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

  @Input('appExchangeRatesFrom')
  public rates: IRate[];

  @Input('appExchangeRatesAutoplay')
  public autoplay: 'off' | 'on' = 'on';

  @Input('appExchangeRatesDuration')
  public duration = 12000;

  public myContext;
  public index = 0;
  private intervalId;

  constructor(
    public tpl: TemplateRef<any>,
    public vcr: ViewContainerRef,
  ) {
  }

  public ngOnInit() {
    this.myContext = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };
    this.vcr.createEmbeddedView(this.tpl, this.myContext);
    this.resetInterval();
  }

  public next() {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.myContext.$implicit = this.rates[this.index];
  }

  public prev() {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.myContext.$implicit = this.rates[this.index];
  }


  private resetInterval() {
    if (this.autoplay !== 'on') {
      return;
    }
    this.clearInterval()
      .initInterval();
  }

  private initInterval() {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.duration);
  }

  private clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }

}
