import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing/app-routing.module';
import { CardComponent } from './components/card/card.component';
import { DataService } from './services/data-service';
import { StopPropagation } from './models/stop-propagation';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CardComponent],
  providers: [DataService, StopPropagation],
})
export class SharedModule { }
