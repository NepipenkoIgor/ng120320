import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public searchText: string;
  public onlyFavorite: boolean;

  public products$: Observable<IProduct[]> = this.productsService.getProducts();

  public constructor(
    private  productsService: ProductsService
  ) {
  }

  ngOnInit() {
    // this.products$.subscribe((products) => {
    //   this.products = products;
    // });
  }

  public search(event: Event) {
    const el = event.target as HTMLInputElement;
    this.searchText = el.value;
  }

  public toggleIsFavorite(e: MatCheckboxChange) {
    this.onlyFavorite = e.checked;
  }


}
