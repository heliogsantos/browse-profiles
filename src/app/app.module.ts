import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ModalSearchModule } from './modal-search/modal-search.module';
import { DataService } from './core/services/data-service';
import { StopPropagation } from './shared/models/stop-propagation';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ModalSearchModule
  ],
  providers: [DataService, StopPropagation],
  bootstrap: [AppComponent]
})
export class AppModule { }
