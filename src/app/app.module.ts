import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';
import { ModalSearchModule } from './modal-search/modal-search.module';
import { DataService } from './core/services/data-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ModalSearchModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
