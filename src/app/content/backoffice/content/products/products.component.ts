import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { getProductsPending } from '../../../../store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public searchText: string;
  public onlyFavorite: boolean;

  public products$: Observable<IProduct[]> = this.store.select('products');

  public constructor(
    private readonly store: Store<IRootState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(getProductsPending());
    // this.products$.subscribe((products) => {
    //   this.products = products;
    // });

    setTimeout(()=>{
      this.store.dispatch(getProductsPending());
    }, 7000)
  }

  public search(event: Event) {
    const el = event.target as HTMLInputElement;
    this.searchText = el.value;
  }

  public toggleIsFavorite(e: MatCheckboxChange) {
    this.onlyFavorite = e.checked;
  }


}
