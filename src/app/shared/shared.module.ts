import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { FirstNamePipe } from './pipes/first-name.pipe';



@NgModule({
  declarations: [
    CardComponent,
    FirstNamePipe,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardComponent, FirstNamePipe, ModalComponent],
  providers: [],
})
export class SharedModule { }
