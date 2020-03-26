import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild, DoCheck,
  EventEmitter, Input, OnChanges, OnDestroy,
  OnInit,
  Output, SimpleChanges,
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
  AfterContentInit, AfterViewInit, OnChanges, AfterContentChecked,
  AfterViewChecked, DoCheck, OnDestroy {

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

  constructor() {
    console.log('constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title);
    this.setSidenavControl.emit(this.drawerRef);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.placeForContent.createEmbeddedView(this.myContent);
  }


  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


}
