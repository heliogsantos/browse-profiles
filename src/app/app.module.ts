import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { DataService } from './core/services/data-service';
import { StopPropagation } from './shared/models/stop-propagation';

import { ModalSearchModule } from './modal-search/modal-search.module';
import { ListCardsModule } from './list-cards/list-cards.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ModalSearchModule,
    ListCardsModule
  ],
  providers: [DataService, StopPropagation],
  bootstrap: [AppComponent]
})
export class AppModule { }
