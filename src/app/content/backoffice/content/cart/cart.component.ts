import { Component, OnInit } from '@angular/core';
import { IRootState } from '../../../../store';
import { ICartProduct, cartProducts } from '../../../../store/reducers/cart.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../../../../store/actions/cart.action';


class User {
  constructor(
    public name: string
  ) {
  }

  public getDate() {
    return Date.now();
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$: Observable<ICartProduct[]> = this.store.select(cartProducts);

  public user1 = new User('Ihor');
  public user2 = new User('Eugene');

  public constructor(
    private store: Store<IRootState>
  ) {
  }

  public ngOnInit(): void {
    this.products$.subscribe((v) => {
      console.log(v);
    });

    setTimeout(() => {
       this.user2.name = 'Ihor';
      // this.user2 = new User('Den')
    }, 5000);
  }

  public decrement({id, count}): void {
    if (count === 1) {
      this.remove(id);
      return;
    }
    this.store.dispatch(decrementProductInCart({id}));
  }

  public increment(id: string): void {
    this.store.dispatch(incrementProductInCart({id}));
  }

  public remove(id: string) {
    this.store.dispatch(removeProductFromCart({id}));
  }

  public trackById(index: number, item: ICartProduct) {
    return item._id;
  }


}
