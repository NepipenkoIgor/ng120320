import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

@Injectable()
export class ProductsService {

  public constructor(
    // @Inject(HttpClient) private http: IHttp   // TODO Inject without Injectable
    private http: HttpClient,
  ) {
  }

  public getProducts() {
    return this.http.get<IProduct[]>(`/products`);
  }


  public getProduct(productId: string) {
    return this.http.get<IProduct | null>(`/products/${productId}`);
  }
}

