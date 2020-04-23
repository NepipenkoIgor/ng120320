export const backOfficeRoutes = [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: () => import('./content/products/products.module')
        .then((m) => m.ProductsModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('./content/cart/cart.module')
        .then((m) => m.CartModule)
    },
  ];
