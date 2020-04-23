import { Action, createReducer, on } from '@ngrx/store';
import { getProductsSuccess } from '../actions/products.action';

export interface IUser {
  name: string,
  bonuses: number
}

const initialState: IUser = {
  name: 'Igor',
  bonuses: 0.8
};

const reducer = createReducer(
  initialState
);

export function userReducer(state: IUser | undefined, action: Action) {
  return reducer(state, action);
}
