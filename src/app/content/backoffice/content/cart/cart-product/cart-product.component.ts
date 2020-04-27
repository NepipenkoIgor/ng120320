import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Query, QueryList, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements AfterViewInit {

  @Input()
  public product;

  @ViewChildren(MatIcon)
  public icons: QueryList<MatIcon>;

  @Output()
  public remove: EventEmitter<string> = new EventEmitter();
  @Output()
  public increment: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public decrement: EventEmitter<{ id: string, count: number }> = new EventEmitter();


  public ngAfterViewInit(): void {
    this.icons.forEach((el) => {
      console.log(el);
    });

  }

  public onDecrement(decObj): void {
    this.decrement.emit(decObj);
  }

  public onIncrement(id: string): void {
    this.increment.emit(id);
  }

  public onRemove(id: string) {
    this.remove.emit(id);
  }
}
