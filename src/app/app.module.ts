import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ModalSearchModule } from './modal-search/modal-search.module';
import { ListCardsModule } from './list-cards/list-cards.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalSearchModule,
    ListCardsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
