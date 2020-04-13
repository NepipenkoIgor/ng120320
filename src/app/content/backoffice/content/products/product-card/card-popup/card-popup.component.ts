import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IProduct } from '../../products.service';

@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.css']
})
export class CardPopupComponent {

  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;

}

@NgModule({
  declarations: [CardPopupComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ]
})
class CardPopupModule{}
