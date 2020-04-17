import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolveService } from './one-product/product-resolve.service';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFilterPipe,
    ProductCardComponent,
    OneProductComponent
  ],
  imports: [
    SharedModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':productId',
        component: OneProductComponent,
        data: {
          title: 'Product page'
        },
        resolve: {
          product: ProductResolveService
        }
      }
    ])
  ],
  providers: [ProductsService, ProductResolveService]
})
export class ProductsModule {
}
