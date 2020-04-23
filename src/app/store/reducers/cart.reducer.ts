import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { getProductsSuccess } from '../actions/products.action';
import { IProduct } from './products.reducer';
import { addProductToCart, decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../actions/cart.action';
import { IUser } from './user.reducer';

export interface ICartProduct extends IProduct {
  count: number
}

export const cartAdapter = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});


const initialState: EntityState<ICartProduct> = cartAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(addProductToCart, (state, {product}) => {
    const entity = state.entities[product._id];
    return cartAdapter.upsertOne({
      ...product,
      count: entity ? ++entity.count : 1
    }, state);
  }),
  on(removeProductFromCart, (state, {id}) => {
    return cartAdapter.removeOne(id, state);
  }),
  on(incrementProductInCart, (state, {id}) => {
    const entity = state.entities[id];
    return cartAdapter.updateOne({
      id,
      changes: {count: ++entity.count}
    }, state);
  }),
  on(decrementProductInCart, (state, {id}) => {
    const entity = state.entities[id];
    return cartAdapter.updateOne({
      id,
      changes: {count: --entity.count}
    }, state);
  })
);


export const {selectAll} = cartAdapter.getSelectors();
export const selectCartState = createFeatureSelector<EntityState<ICartProduct>>('cart');
export const selectUserState = createFeatureSelector<IUser>('user');
export const selectCartProducts = createSelector(selectCartState, selectAll);

export const cartProducts = createSelector(
  selectCartProducts,
  selectUserState,
  (products, user) => {
    return products.map((product) => {
      return {...product, price: product.price * user.bonuses * product.count};
    });
  }
);

// export const productsWithSummaryPrice = createSelector(
//   selectCartProducts,
//   (products) => {
//     return products.map((product) => {
//       return {...product, price: product.price * product.count};
//     });
//   }
// );

export const totalProductsCount = createSelector(
  selectCartProducts,
  (products) => {
    return products.reduce((count, product) => {
      return (count += product.count);
    }, 0);
  }
);


export function cartReducer(state: EntityState<ICartProduct> | undefined, action: Action) {
  return reducer(state, action);
}

