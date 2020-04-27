import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductComponent } from './cart-product.component';
import { ICartProduct } from '../../../../../store/reducers/cart.reducer';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

const product: ICartProduct = {
  '_id': '5e7cef4eed3d55e9ccc62885',
  'title': 'Product 111',
  'img': 'assets/img/product-4.jpg',
  'price': 2345,
  'author': 'Igor',
  'isFavorite': false,
  count: 1
};


describe('CartProductComponent', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();

    spyOn(component, 'onDecrement')
      .and
      .callThrough();

    spyOn(component, 'onIncrement')
      .and
      .callThrough();

    spyOn(component, 'onRemove')
      .and
      .callThrough();

    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    spyOn(component.decrement, 'emit')
      .and
      .callThrough();

    spyOn(component.increment, 'emit')
      .and
      .callThrough();

  });

  it('should decrement', () => {
    const decrementIcon = fixture.debugElement.query(By.css('.decrement'));
    decrementIcon.triggerEventHandler('click', null);
    expect(component.onDecrement)
      .toHaveBeenCalledWith({id: product._id, count: product.count});
    expect(component.onDecrement).toHaveBeenCalledTimes(1);
    expect(component.decrement.emit)
      .toHaveBeenCalledWith({id: product._id, count: product.count});
    expect(component.decrement.emit).toHaveBeenCalledTimes(1);
    expect(component.onIncrement).not.toHaveBeenCalled();
    expect(component.onDecrement).toHaveBeenCalledBefore(component.decrement.emit);
  });
});
