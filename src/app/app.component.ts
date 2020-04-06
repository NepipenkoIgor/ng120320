import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IProduct, products$ } from './products';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Ng APP';
  public drawerRef: MatSidenav;
  public searchText: string;
  public onlyFavorite: boolean;
  public img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

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

  public setSidenav(drawerRef: MatSidenav) {
    this.drawerRef = drawerRef;
  }

  public search(event: Event) {
    const el = event.target as HTMLInputElement;
    this.searchText = el.value;
  }

  public toggleIsFavorite(e: MatCheckboxChange) {
    this.onlyFavorite = e.checked;
  }
}
