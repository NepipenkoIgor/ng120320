import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFilterPipe,
    ProductCardComponent
  ],
  imports: [
    SharedModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ])
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
