import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [CartComponent],
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
