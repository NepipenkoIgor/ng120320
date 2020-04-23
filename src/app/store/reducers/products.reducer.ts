import { Action, createReducer, on } from '@ngrx/store';
import { getProductsSuccess } from '../actions/products.action';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

const initialState: IProduct[] = [];

const reducer = createReducer(
  initialState,
  on(getProductsSuccess, (_state, {products}) => {
    return products;
  })
);

export function productsReducer(state: IProduct[] | undefined, action: Action) {
  return reducer(state, action);
}
