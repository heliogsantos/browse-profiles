import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [
    CardComponent,
    FirstNamePipe,
    ModalComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardComponent, FirstNamePipe, ModalComponent, AvatarComponent],
  providers: [],
})
export class SharedModule { }
