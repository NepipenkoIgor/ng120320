import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SidenavComponent implements OnInit {

  @Output()
  public setSidenavControl = new EventEmitter(true);

  @ViewChild('drawer', {static: true})
  public drawerRef: MatSidenav;


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.drawerRef);
    this.setSidenavControl.emit(this.drawerRef);
  }

}
