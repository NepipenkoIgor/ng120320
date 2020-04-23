import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';

export const addProductToCart = createAction(
  '[Cart page] Add Product to cart',
  props<{ product: IProduct }>()
);
export const removeProductFromCart = createAction(
  '[Cart page] Remove product from cart',
  props<{ id: string }>()
);

export const incrementProductInCart = createAction(
  '[Cart page] Increment product in cart',
  props<{ id: string }>()
);
export const decrementProductInCart = createAction(
  '[Cart page] Decrement product in cart',
  props<{ id: string }>()
);

// {type: string} & { id: string } = {type: string ,  id: string }
