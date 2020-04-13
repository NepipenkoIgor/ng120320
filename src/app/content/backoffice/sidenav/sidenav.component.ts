import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter, Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild, ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SidenavComponent implements OnInit,
  AfterViewInit {

  @Input()
  public title: string;

  @Output()
  public setSidenavControl = new EventEmitter(true);

  @ViewChild('drawer', {static: true})
  public drawerRef: MatSidenav;
  @ViewChild('placeForContent', {read: ViewContainerRef})
  public placeForContent: ViewContainerRef;


  @ContentChild('content')
  public myContent: TemplateRef<any>;


  ngOnInit(): void {
    this.setSidenavControl.emit(this.drawerRef);
  }

  ngAfterViewInit(): void {
    this.placeForContent.createEmbeddedView(this.myContent);
  }


}
