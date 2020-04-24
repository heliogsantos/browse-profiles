import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing/app-routing.module';
import { CardComponent } from './components/card/card.component';
import { DataService } from './services/data-service';
import { StopPropagation } from './models/stop-propagation';
import { FirstNamePipe } from './pipes/first-name.pipe';


@NgModule({
  declarations: [
    CardComponent,
    FirstNamePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CardComponent, FirstNamePipe],
  providers: [DataService, StopPropagation],
})
export class SharedModule { }
