import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IProduct, products$ } from './products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Ng APP';
  public drawerRef: MatSidenav;
  public img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  public products$: Observable<IProduct[]> = products$;

  ngOnInit() {
    // this.products$.subscribe((products) => {
    //   this.products = products;
    // });
  }

  public setSidenav(drawerRef: MatSidenav) {
    this.drawerRef = drawerRef;
  }
}
