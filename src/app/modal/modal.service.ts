import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

export interface IModalData {
  component: any;
  context: any;
}

export class ModalService {

  private modalSequence$$: Subject<IModalData | null> = new Subject();

  public open(modalData: IModalData) {
    this.modalSequence$$.next(modalData);
  }

  public close() {
    this.modalSequence$$.next(null);
  }

  public get modalSequence$(): Observable<IModalData | null> {
    return this.modalSequence$$.asObservable();
  }
}
