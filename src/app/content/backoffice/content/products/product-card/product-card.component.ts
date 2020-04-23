import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { CardPopupComponent } from './card-popup/card-popup.component';
import { IProduct } from '../products.service';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('cardProduct')
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    private  modalService: ModalService,
    private  store: Store<IRootState>,
  ) {
  }


  public async addToCart() {
    const component = await import('./card-popup/card-popup.component');
    this.modalService.open({
      component: component.CardPopupComponent,
      context: {
        product: this.product,
        save: () => {
          console.log('Save');
          this.store.dispatch(addProductToCart({product: this.product}));
          this.modalService.close();
        },
        close: () => {
          console.log('close');
          this.modalService.close();
        }
      }
    });

  }

}
