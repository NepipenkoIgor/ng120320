import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';
import { HeaderComponent } from '../content/backoffice/header/header.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public isOpen = false;
  private componentFactory: ComponentFactory<any>;
  private modalContext: ComponentRef<any>;

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modal: ViewContainerRef;

  public constructor(
    private modalService: ModalService,
    private cfr: ComponentFactoryResolver,
  ) {
  }

  public ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((modalData) => {
      if (!modalData) {
        this.close();
        return;
      }
      this.isOpen = true;
      this.componentFactory = this.cfr.resolveComponentFactory(modalData.component);
      this.modalContext = this.modal.createComponent(this.componentFactory, 0);
      Object.keys(modalData.context)
        .forEach((key) => {
          this.modalContext.instance[key] = modalData.context[key];
        });
    });
  }


  public close() {
    this.modalContext?.destroy();
    this.isOpen = false;
  }
}
