import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProduct, ProductsService } from '../products.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductResolveService implements Resolve<IProduct | null> {

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
    const productId = route.paramMap.get('productId');
    return this.productsService.getProduct(productId)
      .pipe(
        map((product) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
          }
          return product;
        }),
        // catchError(() => {
        //   this.router.navigate(['/backoffice']);
        //   return EMPTY
        // })
      );
  }

}
