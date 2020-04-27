import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';



@NgModule({
  declarations: [CartComponent, CartProductComponent, DefaultComponent, OnPushComponent],
  imports: [
    SharedModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent
      }
    ])
  ]
})
export class CartModule { }
