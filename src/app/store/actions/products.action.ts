import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';

export const getProductsPending = createAction(
  '[Products page] Get products pending'
);
/*
 {
  type: '[Products page] Get products pending'
 }
*
* */

export const getProductsSuccess = createAction(
  '[Products page] Get products success',
  props<{ products: IProduct[] }>()
);

/*
 {
  type: '[Products page] Get products pending',
  products: []
 }
*
* */
