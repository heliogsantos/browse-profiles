import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';

import { SharedModule } from './../../shared/shared.module';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],exports: [CardsComponent]
})
export class HomeModule { }
