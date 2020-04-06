import { IProduct } from './products';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// interface IHttp {
//   get<T>(url: string): Observable<T>;
// }
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

}

