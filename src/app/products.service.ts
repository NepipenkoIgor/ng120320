import { IProduct } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductsService {

  public constructor(
    //  @Inject(HttpClient) private http: HttpClient  // TODO Inject without Injectable
    private http: HttpClient,
  ) {
  }

  public getProducts() {
    return this.http.get<IProduct[]>(`/products`);
  }

}

