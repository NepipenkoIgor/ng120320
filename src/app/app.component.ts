import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title;
  public drawerRef: MatSidenav;
  public img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  public ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Ng APP';
    }, 5000);
  }

  public setSidenav(drawerRef: MatSidenav) {
    this.drawerRef = drawerRef
  }
}
