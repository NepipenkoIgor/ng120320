import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.service';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], text: string, onlyFavorite: boolean = false): any {
    let result = products;
    if (onlyFavorite) {
      result = result.filter((product: IProduct) => product.isFavorite === onlyFavorite);
    }
    if (!text) {
      return result;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    });
  }

}
