import { Component } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent  {
  public title = 'Ng APP';
  public drawerRef: MatSidenav;
  public setSidenav(drawerRef: MatSidenav) {
    this.drawerRef = drawerRef;
  }
}
