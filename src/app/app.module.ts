import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { CardsComponent } from './modules/home/cards/cards.component';

export const routes: Routes = [
  { path: '', component:  CardsComponent },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule,
    ProfileModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
