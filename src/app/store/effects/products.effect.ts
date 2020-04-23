import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { ProductsService } from '../../content/backoffice/content/products/products.service';
import { EMPTY } from 'rxjs';
import { Injectable, Optional } from '@angular/core';

@Injectable()
export class ProductsEffect {
  public getProducts$ = createEffect(() => this.actions$
    .pipe(
      ofType(getProductsPending),
      switchMap(() => {
        return this.productsService.getProducts()
          .pipe(
            mergeMap((products) => {
              return [getProductsSuccess({products})] // store.dispatch(getProductsSuccess({products}))
            }),
            catchError((err) => {
              console.log(err);
              return EMPTY;
            })
          );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    @Optional() private readonly productsService: ProductsService,
  ) {

  }

}
