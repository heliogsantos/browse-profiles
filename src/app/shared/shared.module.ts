import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { DataService } from './services/data-service';
import { StopPropagation } from './services/stop-propagation';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { ProfileModule } from './../modules/profile/profile.module';


@NgModule({
  declarations: [
    CardComponent,
    FirstNamePipe,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ProfileModule,
    RouterModule
  ],
  exports: [CardComponent, FirstNamePipe, ModalComponent],
  providers: [DataService, StopPropagation],
})
export class SharedModule { }
