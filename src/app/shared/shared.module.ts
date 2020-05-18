import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    CardComponent,
    FirstNamePipe,
    ModalComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [CardComponent, FirstNamePipe, ModalComponent, AvatarComponent, ProfileService],
  providers: [],
})
export class SharedModule { }
